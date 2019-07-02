import { Component } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {

  Artists: any = [];
  ArtistsAlbums: any = {};
  Albums: any = [];

  constructor(private spotifyService: SpotifyService, private router: ActivatedRoute, private routerR: Router) {
    this.router.params.subscribe((params: any) => {
      this.getArtistId(params.id);
      this.getAlbums(params.id);
    });
}

  getArtistId(id: string) {
    this.spotifyService.getArtistId(id)
    .subscribe( res => {
      // console.log(res);
      this.Artists = res;
    });
  }

  getAlbums(id: string) {
    this.spotifyService.getAlbums(id)
    .subscribe((res: any) => {
      console.log(res);
      this.Albums = res.items;
  });
}

image(item: Array<any> = []) {
  if (!item.length) {
    return 'assets/noimage.jpg';
  }

  return item[0].url;
}

moveToAlbumWithTracks(xid: string) {
  this.routerR.navigate(['/albumwithtracks', xid]);
}

}
