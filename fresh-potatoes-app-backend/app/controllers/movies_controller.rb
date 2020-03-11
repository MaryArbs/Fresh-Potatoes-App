class MoviesController < ApplicationController
  def index
    movies = Movie.all
    render json: MovieSerializer.new(movies)
  end


  def create
    newMovie = Movie.create(movie_params)
    render json: MovieSerializer.new(newMovie)
  end

  def show
    movie = Movie.find_by(id: params[:id])
    options = {
      include: [:reviews]
    }
    render json: MovieSerializer.new(movie, options)
  end

  private
  def movie_params
    params.require(:newMovie).permit(:title)
  end 
end

