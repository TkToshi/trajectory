class Profile < ApplicationRecord
  has_one_attached :profile_image
  belongs_to :user

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :gender
end
