class User < ApplicationRecord
    has_many :comments
    has_many :created_trips, class_name: "trip"
    # has_many :user_trips
    has_many :trips, through: :user_trips
    
    has_secure_password

end
