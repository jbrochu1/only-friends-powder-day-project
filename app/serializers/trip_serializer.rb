class TripSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :trip_start, :trip_end, :mountain_id
  
  has_many :comments
  # has_many :mountains
  has_many :users
end
