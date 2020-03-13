class Movie {
    constructor(movieJSON){
      this.id = movieJSON.id
      this.title = movieJSON.title
      this.image = movieJSON.image
      
    }


    renderLi(){
      return `<li  data-id="${this.id}" class="movie">${this.title} </li><br>
      <div><img src="${this.image}"> </div>
      <div><input type="button" id="add-review" value="Add Review"></div><br>
    
      `  
    }

}