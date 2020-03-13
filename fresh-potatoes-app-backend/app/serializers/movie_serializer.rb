class MovieSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :image
  # has_many :reviews
   
end
