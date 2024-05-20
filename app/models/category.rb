class Category < ActiveHash::Base
  self.data = [
    { id: 1, name: '---' },
    { id: 2, name: 'private' },
    { id: 3, name: 'public' },

  ]

  include ActiveHash::Associations
  has_many :post
end