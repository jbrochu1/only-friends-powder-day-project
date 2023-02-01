class User < ApplicationRecord
    has_many :created_trips, class_name: "Trip"
    
    has_many :user_trips
    has_many :trips, through: :user_trips
    has_many :comments
    has_many :trips, through: :comments
    has_secure_password

    validates :username, uniqueness: true, presence: true
    validates :password, presence: true 

end
