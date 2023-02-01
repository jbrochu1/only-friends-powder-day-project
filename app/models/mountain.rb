class Mountain < ApplicationRecord
    has_many :trips
    
    # FOR FUTURE USE
    # has_many :mountain_trips
    # has_many :trips, through: :mountain_trips
end
