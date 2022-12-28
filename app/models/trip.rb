class Trip < ApplicationRecord
  has_many :comments
  has_many :users, through: :comments
  # has_many :mountain_trips
  # has_many :mountains, through: :mountain_trips
  has_many :user_trips
  has_many :users, through: :user_trips
  belongs_to :mountain
end
