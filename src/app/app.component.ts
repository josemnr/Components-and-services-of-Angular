import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //https://www.w3schools.com/howto/img_avatar.png
  imgParent = '';

  products: Product[] = [
    {
      id:"1",
      name: "El mejor juguete",
      price:565,
      image: "./assets/images/toy.jpeg"
    },
    {
      id:"2",
      name: "Bicicleta casi nueva",
      price: 356,
      image: "./assets/images/bike.jpeg"
    },
    {
      id:"3",
      name: "Colección de albumes",
      price: 34,
      image: "./assets/images/album.jpeg"
    },
    {
      id:"4",
      name: "Mis libros",
      price: 23,
      image: "./assets/images/books.jpeg"
    },
    {
      id:"5",
      name: "Casita",
      price: 243,
      image: "./assets/images/house.jpeg"
    },
    {
      id:"6",
      name: "Gafas",
      price: 40,
      image: "./assets/images/glasses.jpeg"
    }
  ]

  onLoaded(img:string){
    console.log("log padre", img)
  }
}
