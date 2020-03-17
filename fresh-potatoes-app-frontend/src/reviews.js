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
  // .then(() => this.fullRender())
  }

  // renderUl(){
  //   debugger
  //   this.moviesContainer = document.getElementById('movies-container')
  //   const ul = document.getElementById(`movie-${review.movie_id}`)
  //   this.moviesContainer.innerHTML = this.reviews.map(review => review.ul.appendChild(review))

  // }


  // fullRender = () => {
  //   debugger
  
  //   this.moviesContainer.innerHTML = this.reviews.map(review => review.renderUl()).join("")
  // }
  }