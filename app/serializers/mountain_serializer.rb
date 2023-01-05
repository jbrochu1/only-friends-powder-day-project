class MountainSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :elevation, :ski_pass, :blackout_dates
end
