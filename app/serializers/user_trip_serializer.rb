class UserTripSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :trip_id
  has_one :trip
  has_one :user
end
