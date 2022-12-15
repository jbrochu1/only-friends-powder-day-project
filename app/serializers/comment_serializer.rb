class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :date
  has_one :trip
  has_one :user
end
