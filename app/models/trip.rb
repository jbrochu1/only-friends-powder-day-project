class Trip < ApplicationRecord
  # belongs_to :user ?
  has_many :comments
  has_many :mountain_trips
  has_many :mountains, through: :mountain_trips
end
