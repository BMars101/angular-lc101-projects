import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  title = "Frequently used links"
  favLinks = ["https://www.freeimages.com/", "github.com"]
  constructor() { }

  ngOnInit() {
  }

}
