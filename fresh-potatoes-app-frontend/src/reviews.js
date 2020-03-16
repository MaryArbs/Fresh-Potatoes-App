class Reviews {

  static all = []
  constructor(){
  
   this.adapter = new ReviewsAdapter()
   this.fetchAndLoadReviews()
 }

  //  static addReview(event){
  //   event.preventDefault() 
  //   this.newReviewInput = document.getElementById('new-review')
  //   this.movieID = document.getElementById
  //   const reviewValue = this.newReviewInput.value 
  //   const movieValue = 
  // }

 
fetchAndLoadReviews(){
  this.adapter.getReviews() 
  .then(resObj => {
   resObj.data.forEach(reviewObj => {
      let sanitized = {...reviewObj.attributes, id: reviewObj.id} 
      Reviews.all.push(new Review(sanitized))
      // debugger
    })
  })
  .catch(error => console.log(error.message))
  // .then(() => {
  //   // this.fullRender()
  // })
}

//   fullRender(){
//     this.moviesContainer.innerHTML = this.reviews.map(review => review.renderLi()).join("")
//     }
}