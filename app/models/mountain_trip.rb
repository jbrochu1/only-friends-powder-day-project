class MountainTrip < ApplicationRecord
  belongs_to :trip
  belongs_to :mountain
end
