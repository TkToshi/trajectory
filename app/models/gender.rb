class Gender < ActiveHash::Base
  self.data = [
    { id: 1, name: '---' },
    { id: 2, name: '♂male' },
    { id: 3, name: '♀famale' },
  ]

  include ActiveHash::Associations
  has_many :profiles
end