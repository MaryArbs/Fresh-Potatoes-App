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
    this.movieForm.addEventListener('submit', this.addMovie)
    this.sortMoviesBtn = document.getElementById('sort-movies')
    this.sortMoviesBtn.addEventListener('click', this.sortMovies)
  } 
 
  addMovie = (event) => {
    event.preventDefault() //pass in event object. when you submit form the default behavior is refresh page, which we do not want
    const titleValue = this.newMovieTitle.value //pass in event object. need to take value to create post request using adapter
    const imgValue = this.imageLink.value
    this.adapter.postMovie(titleValue, imgValue).then(movie => { 
      let sanitized = {...movie.data.attributes, id: movie.data.id}
      let newMovie = new Movie(sanitized)
      this.movies.push(newMovie) //created new movie in movies_controller, and then the controller renders movie to JSON
      this.newMovieTitle.value = ''
      this.imageLink.value = ''
      return newMovie
    })
  .then((movieObj) => {
    const ol = document.getElementById(`movies-container`)
    ol.innerHTML += movieObj.renderLi()
   })
  }

  // sort movie button for project review
  sortMovies = (event) => {
    console.log("Button clicked!")
    const sortedMovies = this.movies.sort(function(a,b){
       if (a.title < b.title){
        return -1;
      }
      if (a.title > b.title){
        return 1;
      }
        return 0;
      })
     this.moviesContainer.innerHTML = sortedMovies.map(movie => movie.renderLi()).join("")
     console.log(sortedMovies)
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
