class MountainSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :image, :elevation, :kid_friendly, :ski_pass, :blackout_dates
end
