class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :admin, :first_name, :last_name, :age, :avatar, :neighborhood
  has_many :user_trips
end
