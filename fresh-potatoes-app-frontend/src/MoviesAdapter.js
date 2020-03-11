class MoviesAdapter{
    constructor(){
      this.baseURL = "http://localhost:3000/movies"
    }

    getMovies(){
      return fetch(this.baseURL).then(res => res.json())
    }

    postMovie(value){
      const newMovie = {
        title: value,  // creating new movie object, where the title is equal to value submitted in form 
      };
      // debugger

      return fetch(this.baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({newMovie})// creating new movie object {movie: movie} - property and value 
      }).then(res => res.json()) //this sends parsed json object to makeMovie(event) in movie.js
      
    }
  }