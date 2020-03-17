class Review {
    constructor(reviewJSON){
      this.id = reviewJSON.id
      this.comment = reviewJSON.comment
      this.movie_id =reviewJSON.movie_id
      
    }

    movies(){
      return Movies.all.find(movie => movie.id == this.movie_id)
    }
    
    renderLi(){
      return `<li>${this.comment}</li>`
    }

  //   renderUl(){
  //   const ul = document.getElementById(`movie-${this.movie_id}`)
  //   return ul.appendChild(this.review)

  // }

}

