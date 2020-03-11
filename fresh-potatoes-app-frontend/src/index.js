document.addEventListener('DOMContentLoaded', 
() => {
    console.log('index.js loaded')
});

const moviesAdapter = new MoviesAdapter("http://localhost:3000/movies")
// const brandsAdapter = new BrandsAdapter("http://localhost:3000/brands")

moviesAdapter.fetchMovies()


const main = document.getElementById('main')

const formDiv = document.createElement('div')

menu.addEventListener('click', handleMenuClick)
formDiv.addEventListener('click', handleFormSubmit)

function handleMenuClick (event){
  if (event.target.id !== menu){
    main.innerHTML = ``
    callbacks[`${event.target.id}`]()
  }
}

function handleFormSubmit(event){


  if(event.target.tagName == "BUTTON"){
    let inputs = formDiv.querySelectorAll('input')
    let select = formDiv.querySelector('select')
    let newGranolaObj = {
      title: inputs[0].value,
    }
    moviesAdapter.newMovie(newMovieObj)
  }
}

const callbacks = {
  allMovies: renderAllMovies
}

function renderAllMovies(){
  Movie.all.forEach(movie => {
    main.appendChild(movie.fullRender())
  })
}


