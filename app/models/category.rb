class Category < ActiveHash::Base
  self.data = [
    { id: 1, name: '---' },
    { id: 2, name: 'useal' },
    { id: 3, name: 'mountain' },
    { id: 4, name: 'ocearn' },
    { id: 5, name: 'sightseeing' },

  ]

  include ActiveHash::Associations
  has_many :post
end