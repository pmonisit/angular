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
    },
    {
      id: 3, 
      title: "6 Fall Outfits I’m Stealing From ‘Only Murders in the Building’", 
      description: "I can't believe I'm typing this sentence, but I can't wait for fall. The reason for my excitement is Selena Gomez's wardrobe on Only Murders in The Building. Here are six looks I'm planning to recreate.", 
      author: "JANNELLE SANCHEZ", 
      comments: ["One of the best"]
    }
  ]

  constructor() { }

  getBlogs(): Blog[] {
    return this.blogs;
  }

  setBlog(dt: Blog) {
    this.blogs.push(dt)
  }

  editBlog(dt: Blog){
    for(let data of this.blogs){
      if(data.id === dt.id){
        data.title = dt.title
        data.description = dt.description
        data.author = dt.author
        data.comments = dt.comments
      }
    }
  }
}
