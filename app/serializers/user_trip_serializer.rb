class UserTripSerializer < ActiveModel::Serializer
  attributes :id
  has_one :trip
  has_one :user
end
