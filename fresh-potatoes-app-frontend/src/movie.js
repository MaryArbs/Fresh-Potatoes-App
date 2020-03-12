class Movie {
    constructor(movieJSON){
      this.id = movieJSON.id
      this.title = movieJSON.title
      
      
    }

    renderLi(){
      return `<li data-id="${this.id}" class="movie">${this.title}</li>`  
     
    }

}