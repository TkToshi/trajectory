class Post < ApplicationRecord
  has_one_attached :image
  belongs_to :user
  has_many :likes, dependent: :destroy

  validates :post_text, presence: true, length: { maximum: 40 }

  def liked_by?(user)
    likes.where(user_id: user.id).exists?
  end

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :category
  belongs_to :visibility

  def self.ransackable_attributes(auth_object = nil)
    ["post_text", "created_at", "updated_at", "visibility_id", "category_id"]
  end

  def self.ransackable_associations(auth_object = nil)
    ["user", "likes"]
  end

end
