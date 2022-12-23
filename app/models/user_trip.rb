class UserTrip < ApplicationRecord
  belongs_to :trip
  belongs_to :user

  validates :user_id, uniqueness: { scope: :trip_id}
end
