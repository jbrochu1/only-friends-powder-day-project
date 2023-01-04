class TripSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :trip_start, :trip_end, :mountain_id
  
  has_many :comments
  belongs_to :mountain
  has_many :users
  has_many :user_trips
end
