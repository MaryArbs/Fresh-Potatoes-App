class Movie {
    constructor(movieJSON){
      this.id = movieJSON.id
      this.title = movieJSON.title
      this.image = movieJSON.image
      
    }

  reviews(){
    // debugger
      return Reviews.all.filter(function(review){
        return review.movie_id == this.id
      }, this)
      
  }

  renderLi = () => {
    // debugger
     return `<li data-id="${this.id}" class="movie">${this.title} </li><br>
      <div><img src="${this.image}"> </div><br>
      <div> ${this.reviewForm()}</div>
      <div><ul class="center" id="movie-${this.id}"> ${this.renderReviews()}</ul></div>

     `  
   }

    reviewForm(){
      return ` 
      <form id="new-review-form">
      <input type="text" name="new-review" id="new-review"><br>
      <input type="submit" value="Add Review" id="add-new-review">
      </form>
      `
    }
  
    reviewEvent() {
    this.newReviewForm = document.getElementById('new-review-form')
    this.newReviewForm.addEventListener('submit', Reviews.addReview())
    }
 
   renderReviews = () => {
    return this.reviews().map(review => review.renderLi()).join("") //this is returning is empty string!!!
    //creating one movie with  many reviews
   }

}

