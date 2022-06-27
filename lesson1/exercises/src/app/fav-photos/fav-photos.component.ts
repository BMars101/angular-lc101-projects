import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Fotos';
  image1 = 'https://images.stockfreeimages.com/176/sfi226w/1761191.jpg';
  image2 = 'https://images.freeimages.com/images/small-previews/d9c/parrot-attack-1410608.jpg';
  image3 = 'https://images.stockfreeimages.com/112/sfi226w/1125679.jpg';

  constructor() { }

  ngOnInit() {
  }

}