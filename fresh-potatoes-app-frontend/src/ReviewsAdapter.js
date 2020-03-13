class ReviewsAdapter {

    constructor(){
        this.baseURL = "http://localhost:3000/reviews"
      }
      getReviews(){
        return fetch(this.baseURL).then(res => res.json())
      }
  
  

}