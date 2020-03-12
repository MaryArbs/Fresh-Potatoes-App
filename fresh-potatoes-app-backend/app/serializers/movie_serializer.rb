class MovieSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title
  # has_many :reviews
   
end
