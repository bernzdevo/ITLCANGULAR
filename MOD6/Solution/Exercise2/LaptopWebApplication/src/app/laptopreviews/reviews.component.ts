import { Component, Input } from '@angular/core'
import { LaptopService } from '../services/laptops.services';

@Component({
    selector:'laptop-reviews',
    templateUrl:'reviews.component.html'

})

export class LaptopReviewsComponent{
@Input() laptopdetails:any

constructor(private Reviews:LaptopService){

}

review={}
addReview = function(laptop){
  this.review.laptopId = laptop.Id;
  this.review.createdOn =Date.now();
  laptop.reviews.push(this.review);
  this.newReviews = this.review;
  //this.Reviews.postReviews(this.newReviews).subscribe();
  this.review={};
}
}

