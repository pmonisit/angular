import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogs: Blog[] = [
    {
      id: 1, 
      title: "Zion Adventure Photog", 
      description: "Just make the appointment!!! Arika was phenomenal from start to finish and the AMAZING photos were the icing on the cake. She gave us so many breathtaking locations to choose from and made sure that we were comfortable every step of the way. Typically our family photo shoots involve someone crying, whining, complaining etc….. not this one!!! We had such a great time and our photos show it!! Arika is amazing and you will definitely not be disappointed!!!! ", 
      author: "John Doe", 
      comments: ["Very inspiring"]
    },
    {
      id: 2, 
      title: "Mrs. Space Cadet", 
      description: "We had the best time with Matti during our photo session! Everyone with Zion Adventure Photog was so great to work with during the whole process and we are thrilled with the pictures we got of our family.", 
      author: "Jane Doe", 
      comments: ["One of the best"]
    }
  ]

  constructor() { }

  getBlogs(): Blog[] {
    return this.blogs;
  }
}
