class MovieSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title
  has_many :reviews
  has_many :users, through: :reviews 
   
end
