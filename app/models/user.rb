class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_one :profile, dependent: :destroy # 他の関連付けやバリデーションなど
  has_many :posts, dependent: :destroy # 他の関連付けやバリデーションなど
  has_many :likes, dependent: :destroy # 他の関連付けやバリデーションなど

  has_many :active_relationships, class_name: 'Relationship', foreign_key: :following_id
  has_many :followings, through: :active_relationships, source: :follower

  has_many :passive_relationships, class_name: 'Relationship', foreign_key: :follower_id
  has_many :followers, through: :passive_relationships, source: :following

  before_destroy :delete_associated_posts # ユーザーが削除されるときに、関連する投稿も削除する

  def followed_by?(user)
    follower = passive_relationships.find_by(following_id: user.id)
    follower.present?
  end

  private

  def delete_associated_posts
    self.posts.destroy_all
  end

end
