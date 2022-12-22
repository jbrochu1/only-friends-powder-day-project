class Trip < ApplicationRecord
  # belongs_to :user ?
  has_many :comments
  has_many :users, through: :comments
  has_many :trips
  has_many :user_trips
  has_many :users, through: :user_trips
end
