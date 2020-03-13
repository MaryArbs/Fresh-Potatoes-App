class ReviewsController < ApplicationController
  
  def index
    reviews = Review.all
    render json: ReviewSerializer.new(reviews)
  end

  def create
    movie = Review.create(review_params)
    render json: ReviewSerializer.new(review)
  end

  def destroy
    review = Review.find_by(id: params[:id])
    review.destroy
  end

  private
  def review_params
    params.require(:review).permit(:comment, :movie_id)
  end 
end


