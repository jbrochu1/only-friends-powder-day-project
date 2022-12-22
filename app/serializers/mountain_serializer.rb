class MountainSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :image, :elevation, :ski_pass, :blackout_dates
  has_many :trips
end
