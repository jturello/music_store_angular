import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  outputs: ['onAlbumClicked'],
  template: `
  <h3>Album List</h3>
  <div class="row" *ngFor="#currentAlbum of albumList" (click)="albumClicked(currentAlbum)">
    <div class='col-sm-3'>
      {{ currentAlbum.title }}
    </div>
    <div class='col-sm-3'>
      {{ currentAlbum.artist }}
    </div>
    <div class='col-sm-3'>
      {{ currentAlbum.genre }}
    </div>
    <div class='col-sm-3'>
      {{ currentAlbum.price }}
    </div>
  </div>
  `
})

export class AlbumListComponent {
  public albumList: Album[];
  public onAlbumClicked: EventEmitter<Album>;
  constructor() {
    this.onAlbumClicked = new EventEmitter();
  }
  albumClicked(clickedAlbum: Album): void {
    console.log('child', clickedAlbum);
    this.onAlbumClicked.emit(clickedAlbum);
  }

}
