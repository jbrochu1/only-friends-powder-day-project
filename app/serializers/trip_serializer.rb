class TripSerializer < ActiveModel::Serializer
  attributes :id, :trip_start, :trip_end
  has_one :mountain
  has_one :user
end
