class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :comment, movie_id
  belongs_to :movie 
end
