class MoviesController < ApplicationController
  def index
    movies = Movie.all
    render json: MovieSerializer.new(movies)
  end

  def show
    movie = Movie.find_by(id: params[:id])
    options = {
      include: [:reviews]
    }
    render json: MovieSerializer.new(movie, options)
  end
end


