class TripSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :trip_start, :trip_end
  

  has_many :user_trips
  has_many :mountain_trips
  # has_one :mountain
  # has_one :user
end
