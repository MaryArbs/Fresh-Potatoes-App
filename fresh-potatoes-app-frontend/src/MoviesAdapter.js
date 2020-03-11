class MoviesAdapter{
    constructor(baseURL){
      this.baseURL = baseURL
    }

    fetchMovies(){
        fetch(this.baseURL)
          .then(res => res.json())
          .then(resObj => {
            resObj.data.forEach(movieObj => {
              let sanitized = {...movieObj.attributes, id: movieObj.id} //why use the spread operator 
              new Movie(sanitized) //creating movie 
            })
          })
          .then(() => console.log(Movie.all))
      }
    }