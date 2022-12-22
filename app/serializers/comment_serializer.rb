class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :date, :user_id, :user
  has_one :trip
  has_one :user
end
