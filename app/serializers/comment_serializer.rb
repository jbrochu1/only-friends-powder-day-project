class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :date, :user
  has_one :trip
  has_one :user
end
