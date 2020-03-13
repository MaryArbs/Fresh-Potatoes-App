class Movie {
    constructor(movieJSON){
      this.id = movieJSON.id
      this.title = movieJSON.title
      this.image = movieJSON.image
      
    }

  reviews(){
    debugger
      return Reviews.all.filter(function(review){
        return review.movie_id.toString() === this.id
      }, this)
  }

//reviews method  look at review.all and grab reviews that match 
  renderLi(){
      return `<li  data-id="${this.id}" class="movie">${this.title} </li><br>
      <div><img src="${this.image}"> </div>
      <div id="add-review" ><input type="button" value="Add Review" onClick:"javascript:addReview();"></div><br>
      <div id="movie-${this.id}"> ${this.renderReviews()}</div>
      `  
    }
  


   renderReviews(){
     return this.reviews().map(review => review.renderLi()).join("")
   }

}

