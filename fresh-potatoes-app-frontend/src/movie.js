class Movie {

    static all = []
  
    constructor({id, title} ){
      this.title = title
      this.id = id
  
      this.element = document.createElement('div')
      this.element.className = "movie"
      this.element.id = `movie-${this.id}`
  
      Movie.all.push(this)
    }

    movies(){
        return Movie.all.filter(function(movie){
          return movie.id === this.id
        }, this)
      }
    
      fullRender(){
        this.element.innerHTML = `
          <h1>${this.title}</h1>
         
        `
        return this.element
      }
    }
