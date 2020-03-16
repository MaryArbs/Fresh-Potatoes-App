class ReviewsAdapter {

    constructor(){
        this.baseURL = "http://localhost:3000/reviews"
      }
      
      getReviews(){
        return fetch(this.baseURL).then(res => res.json())
      }

      // postReview(reviewValue){
      //   const review = {
      //   comment: reviewValue,
      //    // creating new review object
      //   };
      //   return fetch(this.baseURL, {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({review})// 
      //   }).then(res => res.json()) //this sends parsed json object to addNewReview(event)
      // }

      newreview(reviewObj){
        let configObj = {
          method: "POST",
          headers: {"Content-Type": "application/json", "Accepts": "application/json"},
          body: JSON.stringify(reviewObj)
        }
        fetch(this.baseURL, configObj)
          .then(res => res.json())
          .then((resObj) => this.sanitizeAndAddReview(resObj.data))
      }
    
      sanitizeAndAddReview(reviewObj){
        console.log(reviewObj);
        let sanitized = {...reviewObj.attributes, id: reviewObj.id, movie_id: reviewObj.relationships.movie.data.id}
        new Review(sanitized)
      }
  
  

}