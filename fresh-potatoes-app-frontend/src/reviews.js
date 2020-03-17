class Reviews {

  static all = []
  constructor(){
  
   this.adapter = new ReviewsAdapter()
 }

 bindingsAndEventListeners = () => {
  this.newReviewForm = Array.from(document.getElementsByClassName('new-review-form'))
  this.newReviewForm.forEach(el => {
    console.log("ADDING EVENT LISTENER!");
   el.addEventListener('submit', this.addReview)
  })
}

 
addReview = (event) => {
  event.preventDefault()
  this.newReviewInput = event.target.querySelector(`#new-review`)
  let input = this.newReviewInput.value
  let movieId = event.target.dataset.movie
  this.adapter.postReview(input, movieId).then(review => { 
    let sanitized = {...review.attributes, id: review.id}
    Reviews.all.push(new Review(sanitized)) 
    this.newReviewInput.value = ''
  })
  .then(() => {
    this.fullRender()
   })
  }


 
fetchAndLoadReviews = () => {
  return this.adapter.getReviews()
  .then(resObj => {
   resObj.data.forEach(reviewObj => {
      let sanitized = {...reviewObj.attributes, id: reviewObj.id} 
      Reviews.all.push(new Review(sanitized))
    })
  })
  // .then(() => this.fullRender())
  }

  fullRender = () => {
    return this.moviesContainer.innerHTML =  Reviews.all.map(review => review.renderLi()).join("")
  }
  }