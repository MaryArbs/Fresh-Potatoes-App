class Movies {

   constructor(){
    this.movies = []
    this.adapter = new MoviesAdapter()

  }

  bindingsAndEventListeners = () => {
    this.moviesContainer = document.getElementById('movies-container') //now I do not need to define it everytime I want to use it,gets trigger inside constructort
    this.newMovieTitle = document.getElementById('new-movie-title') //want to get value of what will be submited
    this.imageLink = document.getElementById('image-link') //need this value 
    this.movieForm = document.getElementById('new-movie-form')
    this.movieForm.addEventListener('submit', this.addMovie.bind(this))//anytime you make form, make sure you bind 'this' to movies. if you do not do this, when you use "this" in makeForm, "this" will refere to the form, and return undefined value. You want to value, of the Notes. 
  } 

  addMovie(event){
    event.preventDefault() //pass in event object. when you submit form the default behavior is refresh page, which we do not want
    const titleValue = this.newMovieTitle.value //pass in event object. need to take value to create post request using adapter
    const imgValue = this.imageLink.value
    this.adapter.postMovie(titleValue, imgValue).then(movie => { 
      let sanitized = {...movie.data.attributes, id: movie.id}
      // sanitized.sort((a,b) => a.id, b.id)
      // debugger
      this.movies.push(new Movie(sanitized)) //created new movie in movies_controller, and then the controller renders movie to JSON
      this.newMovieTitle.value = ''
      this.imageLink.value = ''
    })
  .then(() => {
    this.fullRender()
   })
  }

  fetchAndLoadMovies = () => {
  return this.adapter.getMovies() //fetching movies from db
  .then(resObj => {
    resObj.data.forEach(movieObj => {
      let sanitized = {...movieObj.attributes, id: movieObj.id} 
      // console.log(sanitized)
      this.movies.push(new Movie(sanitized)) //creating movie 
      // console.log(this.movies)
    })
  })
  .then(this.bindingsAndEventListeners)
  .then(() => this.fullRender())
}
  fullRender = () => {
  this.moviesContainer.innerHTML = this.movies.map(movie => movie.renderLi()).join("")
  }

}
