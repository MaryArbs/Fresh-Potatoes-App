class MoviesController < ApplicationController
  
  def index
    movies = Movie.all
    render json: MovieSerializer.new(movies)
  end

  def create
    movie = Movie.create(movie_params)
    render json: MovieSerializer.new(movie)
  end

  def update
    movie = Movie.find_by(id: params[:id])
    movie.update(movie_params)
    render json: MovieSerializer.new(movie)
  end


  private
  def movie_params
    params.require(:movie).permit(:title, :image)
  end 
end

