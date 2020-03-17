class ReviewsAdapter {

    constructor(){
        this.baseURL = "http://localhost:3000/reviews"
      }
      
      getReviews(){
        return fetch(this.baseURL).then(res => res.json())
      }

      postReview(input, movieId){
        const review = {
        comment: input,
        movie_id: movieId,
    // creating new review object
        };
        return fetch(this.baseURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({review})
        }).then(res => res.json())
         //this sends parsed json object to addReview(event)
      }
  
}
 