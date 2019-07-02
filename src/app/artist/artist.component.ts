import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  Artists: any = {};
  ArtistsAlbums: any = [];

  constructor(private spotifyService: SpotifyService, private router: ActivatedRoute, private routerR: Router) {
    this.router.params.subscribe( params => {
    // tslint:disable-next-line: no-string-literal
      this.getArtistId( params['id']);
      // tslint:disable-next-line: no-string-literal
      this.getTopArtistTracks (params['id']);
});
  }

  ngOnInit() {
  }

  getArtistId(id: string) {
    this.spotifyService.getArtistId(id)
    .subscribe( res => {
      console.log(res);
      this.Artists = res;
    });
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

  getTopArtistTracks(id: string) {
    this.spotifyService.getTopArtistTracks(id)
    .subscribe (a => {
// tslint:disable-next-line: no-string-literal
      console.log(a['tracks']);
// tslint:disable-next-line: no-string-literal
      this.ArtistsAlbums = a['tracks'];
    });
  }

  viewAlbums(id: string) {
    this.routerR.navigate(['/albums', id]);
  }
}
