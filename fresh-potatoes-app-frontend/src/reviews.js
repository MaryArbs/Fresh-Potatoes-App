class Reviews {

  static all = []
  constructor(){
  
   this.adapter = new ReviewsAdapter()
  }

  bindingsAndEventListeners = () => {
  // this.newReviewForm = Array.from(document.getElementsByClassName('new-review-form'))
  // this.newReviewForm.forEach(el => {
  //  el.addEventListener('submit', this.addReview)
  // })
  const moviesContainer = document.querySelector('#movies-container')
  moviesContainer.addEventListener('submit', (e) => {
   e.preventDefault()
   this.addReview(e)
  })
  }

 
  addReview = (event) => {
   this.newReviewInput = event.target.querySelector(`#new-review`)
   let input = this.newReviewInput.value
   let movieId = event.target.dataset.movie
   this.adapter.postReview(input, movieId).then(review => { 
    let sanitized = {...review.data.attributes, id: review.data.id}
    let newReview = new Review(sanitized)
    Reviews.all.push(newReview) 
    this.newReviewInput.value = ''
    return newReview
  })
  .then((reviewObj) => {
    const ul = document.getElementById(`movie-${reviewObj.movie_id}`)
    ul.innerHTML += reviewObj.renderLi()
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
  }
}