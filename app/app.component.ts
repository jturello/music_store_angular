import { Component } from 'angular2/core';
import { Album } from './album.model';
import { AlbumListComponent } from './album-list.component';

@Component({
  selector: 'my-app',
  directives: [AlbumListComponent],
  template: `
    <div class="container">
      <h1>Angular Music Store</h1>
      <album-list [albumList]="albums"></album-list>
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

  albumSelected(clickedAlbum: Album): void {
    console.log(clickedAlbum);
  }

}
