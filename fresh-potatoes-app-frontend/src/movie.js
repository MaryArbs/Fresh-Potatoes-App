class Movie {
    constructor(movieJSON){
      this.title = movieJSON.title
      this.id = movieJSON.id
    }

    renderLi(){
      return `<li>${this.title}</li>`
    }

}