class MoviesController < ApplicationController
  
  def index
    movies = Movie.all
    render json: MovieSerializer.new(movies)
  end

  def create
    movie = Movie.create(movie_params)
    render json: MovieSerializer.new(movie)
  end

  def show
    movie = Movie.find_by(id: params[:id])
    options = {
      include: [:reviews]
    }
    render json: MovieSerializer.new(movie, options)
  end

  def update
    # byebug
    movie = Movie.find_by(id: params[:id])
    movie.update(movie_params)
    render json: MovieSerializer.new(movie)
  end

  def destroy
    movie = Movie.find_by(id: params[:id])
    movie.destroy
  end

  private
  def movie_params
    params.require(:movie).permit(:title)
  end 
end

