class Reviews {

    constructor(){
     this.reviews = []
     this.adapter = new ReviewsAdapter()
     this.formSubmit = document.getElementById("form-submit");
     this.formButtons = document.getElementById("form-show-buttons");
     this.addMovieButton = document.getElementById("add-movie");
     this.cardContainer = document.getElementById('movie-card-container');
     this.fetchAndLoadMovies()
     this.bindingsAndEventListeners()
   }

}