class Reviews {

    static all = []
    constructor(){
    
     this.adapter = new ReviewsAdapter()
     this.fetchAndLoadReviews()
     this.bindingsAndEventListeners()
   }

   bindingsAndEventListeners(){
       this.moviesContainer = document.getElementById('movies-container')
    // this.addReviewButton = document.getElementById('add-review')
    // this.addReviewButton.addEventListener('click', this.addReview.bind(this))
   }

//    addReview(){
   
//    }

   
  fetchAndLoadReviews(){
    this.adapter.getReviews() 
    .then(resObj => {
      resObj.data.forEach(reviewObj => {
        let sanitized = {...reviewObj.attributes, id: reviewObj.id} 
        Reviews.all.push(new Review(sanitized))
      })
    })
    .then(() => {
    //   this.fullRender()
    })
  }

//   fullRender(){
//     this.moviesContainer.innerHTML = this.reviews.map(review => review.renderLi()).join("")
//     }
}
