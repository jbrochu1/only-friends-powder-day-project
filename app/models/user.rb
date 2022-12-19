class User < ApplicationRecord
    has_many :created_trips, class_name: "Trip"
    
    has_many :user_trips
    has_many :trips, through: :user_trips
    has_many :comments
    has_secure_password

end
