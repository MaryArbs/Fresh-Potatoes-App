class Movie {
    constructor(movieJSON){
      this.id = movieJSON.id
      this.title = movieJSON.title
      this.image = movieJSON.image
    }

  reviews(){
      return Reviews.all.filter(function(review){
        return review.movie_id == this.id
      }, this) //can pass in context you want to use as a second argument 
      
  }

  renderLi = () => {
    // debugger
     return `<li data-id="${this.id}" class="movie">${this.title} </li><br>
      <div><img src="${this.image}"> </div><br>
      <div><ul class="text-center" id="movie-${this.id}"> ${this.renderReviews()}</ul></div><br>
      <div> ${this.reviewForm()}</div>

     `  
   }

    reviewForm(){
      return ` 
      <form class="new-review-form" data-movie=${this.id}>
      <input type="text" name="new-review" id="new-review"><br>
      <input type="submit" value="Add Review" id="add-new-review">
      </form>
      `
    }
 
   renderReviews = () => {
    return this.reviews().map(review => review.renderLi()).join("")
    //creating one movie with  many reviews
   }

}

