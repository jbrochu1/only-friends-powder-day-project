class MountainTripSerializer < ActiveModel::Serializer
  attributes :id
  has_one :trip
  has_one :mountain
end
