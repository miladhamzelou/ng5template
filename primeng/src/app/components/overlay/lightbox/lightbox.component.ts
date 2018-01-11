import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {

   images: any[];

    constructor() {
        this.images = [];
        this.images.push({source:'https://static.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg', thumbnail: 'https://static.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg', title:'Sopranos 1'});
        this.images.push({source:'https://static.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg', thumbnail: 'https://static.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg', title:'Sopranos 2'});
        this.images.push({source:'https://i.pinimg.com/736x/5a/59/7b/5a597b465949c8e1dc2198c542dbeb2d--unique-flowers-amazing-flowers.jpg', thumbnail: 'https://i.pinimg.com/736x/5a/59/7b/5a597b465949c8e1dc2198c542dbeb2d--unique-flowers-amazing-flowers.jpg', title:'Sopranos 3'});
    }

  ngOnInit() {
  }

}
