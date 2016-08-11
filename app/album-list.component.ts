import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  template: `

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
  `

})

export class AlbumListComponent {
  public albumList: Album[];
  onClick(clickedAlbum: Album): void {
    console.log(clickedAlbum);
  }

}
