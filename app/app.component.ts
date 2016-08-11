import { Component } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Angular Music Store</h1>
      <h3>Album List</h3>
      <div class="row" *ngFor="#album of albums" (click)="onClick(album)">
        <div class='col-sm-3'>
          {{ album.title }}
        </div>
        <div class='col-sm-3'>
          {{ album.artist }}
        </div>
        <div class='col-sm-3'>
          {{ album.genre }}
        </div>
        <div class='col-sm-3'>
          {{ album.price }}
        </div>
      </div>
    </div>
    <hr>
  `
})
export class AppComponent{
  public albums: Album[];
  constructor(){
    this.albums = [
      new Album('Album One', 'Eddie Murphy', 'Comedy', '10.00'),
      new Album('Album Two', 'Jane from Spain', 'Euro-pop', '6.99'),
      new Album('Album Three', 'Luciano Pavarotti', 'Classical', '12.00'),
      new Album('Album Four', 'Lucia Popp', 'Classical', '7.05')
    ]
  }

  onClick(clickedAlbum: Album): void {
    console.log(clickedAlbum);
  }

}
