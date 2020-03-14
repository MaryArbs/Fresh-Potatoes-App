class Movie {
    constructor(movieJSON){
      this.id = movieJSON.id
      this.title = movieJSON.title
      this.image = movieJSON.image
      
    }

  reviews(){
      return Reviews.all.filter(function(review){
        return review.movie_id.toString() === this.id
      }, this)
      
  }

  renderLi(){
      return `<li data-id="${this.id}" class="movie">${this.title} </li><br>
      <div><img src="${this.image}"> </div>
      <div id="add-review" ><input type="button" value="Add Review" onClick:"javascript:addReview();"></div><br>
      <ul id="movie-${this.id}"> ${this.renderReviews()}</ul>
      `  
    }
  
  renderReviews(){
    return this.reviews().map(review => review.renderLi()).join("")
     //creating one movie with  many reviews
   }

}

