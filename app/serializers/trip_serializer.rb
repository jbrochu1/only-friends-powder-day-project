class TripSerializer < ActiveModel::Serializer
  attributes :id, :mountain_id, :user_id, :trip_start, :trip_end
  
  has_many :comments
  belongs_to :mountain
  has_many :users
end
