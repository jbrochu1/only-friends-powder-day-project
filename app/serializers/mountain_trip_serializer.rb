class MountainTripSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :mountain_id
  belongs_to :trip
  belongs_to :mountain
end
