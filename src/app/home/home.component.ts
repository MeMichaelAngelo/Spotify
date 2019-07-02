import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchArtist: string;
  Artists: any[];

  constructor(private spotifyService: SpotifyService, private router: ActivatedRoute, private routerR: Router) { }

  ngOnInit() {
  }

  searchMusic() {
    this.spotifyService.searchMusic(this.searchArtist)
    .subscribe( res => {
      // tslint:disable-next-line:no-string-literal
      console.log(res['artists'].items);
      // tslint:disable-next-line:no-string-literal
      this.Artists = res['artists'].items;
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

  viewArtist(id: string) {
    // console.log(id);
    this.routerR.navigate(['/artist', id]);
  }

}
