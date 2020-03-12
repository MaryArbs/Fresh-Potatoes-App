class Movies {
  
   

  constructor(){
    this.movies = []
    this.adapter = new MoviesAdapter()
    this.fetchAndLoadMovies()
    this.initBindingsAndEventListeners()
  }

  initBindingsAndEventListeners(){
    this.moviesContainer = document.getElementById('movies-container') //now I do not need to define it everytime I want to use it,gets trigger inside constructort
    this.body = document.querySelector('body')
    this.newMovieTitle = document.getElementById('new-movie-title') //want to get value of what will be submited
    this.movieForm = document.getElementById('new-movie-form')
    this.movieForm.addEventListener('submit', this.makeMovie.bind(this))//anytime you make form, make sure you bind 'this' to movies. if you do not do this, when you use "this" in makeForm, "this" will refere to the form, and return undefined value. You want to value, of the Notes. 
    this.moviesContainer.addEventListener('dblclick', this.handleMovieClick.bind(this))
    this.body.addEventListener('blur', this.editMovie.bind(this), true) //add listenter to parent, any children of body will listen for blur
  } 

  makeMovie(event){
    event.preventDefault() //pass in event object. when you submit form the default behavior is refresh page, which we do not want
    const value = this.newMovieTitle.value //pass in event object. need to take value to create post request using adapter
    this.adapter.postMovie(value).then(movie => { 
      let sanitized = {...movie.data.attributes, id: movie.id}
      this.movies.push(new Movie(sanitized)) //created new movie in movies_controller, and then the controller renders movie to JSON
      this.newMovieTitle.value = ''
    })
  .then(() => {
    this.render()
  })
}

  handleMovieClick(event){
    const li = event.target
    li.contentEditable = true 
    li.classList.add('editable') //adding css.editable class
  }

  editMovie(event){
  const li = event.target
  li.contentEditable = false 
  li.classList.remove('editable')  //when you click away, edit box dissapears
  const newValue = li.innerHTML //now adapter needs to make the update request, once value is defined
  const id = li.dataset.id  //giving me an empty string... 
  // debugger
  this.adapter.updateMovie(newValue, id)
}

  fetchAndLoadMovies(){
  this.adapter.getMovies()
  .then(resObj => {
    resObj.data.forEach(movieObj => {
      let sanitized = {...movieObj.attributes, id: movieObj.id}
      // console.log(sanitized)
      this.movies.push(new Movie(sanitized)) //creating movie 
      // console.log(this.movies)
    })
  })
  .then(() => {
    this.render()
  })
}

 render(){
  this.moviesContainer.innerHTML = this.movies.map(movie => movie.renderLi()).join("")
 }
}
