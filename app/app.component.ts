import { Component } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Angular Music Store</h1>
      <ul>
        <li *ngFor="#album of albums"> {{ album.title }} </li>
      </ul>
    </div>
  `
})
export class AppComponent{
  public albums: Album[];
  constructor(){
    this.albums = [
      new Album('Album One', 'Eddie Murphy', 'Comedy', 10),
      new Album('Album Two', 'Jane from Spain', 'Euro-pop', 6),
      new Album('Album Three', 'Luciano Pavarotti', 'Classical', 12),
      new Album('Album Four', 'Lucia Popp', 'Classical', 7)
    ]
  }

}
