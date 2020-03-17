// entry point 

const app = new App()
app.reviews.fetchAndLoadReviews()
    .then(app.movies.fetchAndLoadMovies)
    .then(app.reviews.bindingsAndEventListeners)

