class MoviesAdapter{
    
   constructor(){
      this.baseURL = "http://localhost:3000/movies"
    }

    getMovies(){
      return fetch(this.baseURL).then(res => res.json())
    }

    postMovie(titleValue,imgValue){
      const movie = {
      title: titleValue,
      image: imgValue,
       // creating new movie object, where the title/image is equal to value submitted in form 
      };
      return fetch(this.baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({movie})// creating new movie object {movie: movie} - property and value 
      }).then(res => res.json()) //this sends parsed json object to addMovie(event) in movie.js
    }
  }