import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album-with-tracks',
  templateUrl: './album-with-tracks.component.html',
  styleUrls: ['./album-with-tracks.component.css']
})
export class AlbumWithTracksComponent implements OnInit {

  TracksOfAlbums: any = [];
  Artists: any = {};
  Albums: any = [];
  ArtistsAlbums: any = [];
  RealAlbums: any = [];

  constructor(private spotifyService: SpotifyService, private router: ActivatedRoute, private routerR: Router) {
    this.router.params.subscribe( params => {
// tslint:disable-next-line: no-string-literal
        this.getAlbumsWithTracks( params['id']);
        // tslint:disable-next-line: no-string-literal
        this.getRealAlbums( params['id']);
  });
}

  ngOnInit() {
  }


  image(item: any) {
    if (!item) {
      return 'assets/noimage.jpg';
    }
    if (item.length > 0) {
      return item[0].url;
    } else {
      return 'assets/noimage.jpg';
    }
  }

  getAlbumsWithTracks(albumid: string) {
    this.spotifyService.getAlbumsWithTracks(albumid)
    .subscribe(res => {
// tslint:disable-next-line: no-string-literal
      // console.log(res['items']);
// tslint:disable-next-line: no-string-literal
      this.TracksOfAlbums = res['items'];
    });
  }

getRealAlbums(id: string) {
  this.spotifyService.getRealAlbums(id)
  .subscribe( res => {
    this.RealAlbums = res;
  });
}

}
