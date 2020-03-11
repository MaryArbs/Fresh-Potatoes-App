class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :comment, :rating, :user_id, :movie_id
  belongs_to :user
  belongs_to :movie 
end
