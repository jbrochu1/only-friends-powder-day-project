class Trip < ApplicationRecord
  has_many :comments, dependent: :destroy
  has_many :users, through: :comments
  has_many :user_trips, dependent: :destroy
  has_many :users, through: :user_trips
  belongs_to :mountain

  # FOR FUTURE USE
  # has_many :mountain_trips
  # has_many :mountains, through: :mountain_trips
end
