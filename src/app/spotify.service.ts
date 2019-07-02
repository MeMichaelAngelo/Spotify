import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // tslint:disable-next-line: max-line-length
  AccessToken = 'BQARAWm62LVUaFQ7nSjFV-26ZeqwlC4u_IftthN5GxuWfdiS_SLEDdge5C6uRTihqc10uPynG3Tio8dHO6bQDfWKmxQHwXivz9UEPlZXCtTTcm6xKGcbslMzsrwF09IFelwGzqi7jhTY8yquZP04jnU8ls7Eq9UgS11qzVy4j1yiM87vv0IJ&refresh_token=AQBm8PDblAs362mr_n0DdsCWsfltRKAYvsmCykI9K802IPFg0fodiqGltnXYTlBiTS6qo43aGu9pbXPq_wPvGJmxzo3R8F3mSBL_BxtPlh1piH3IeKaYkYa02qTUE7SDjTNaJg';

 private searchUrl: string;
 private artistUrl: string;
 private topartisttracks: string;
 private albums: string;
 private albumswithtracks: string;
 private RealAlbums: string;

  constructor(private http: HttpClient) { }

  searchMusic(str: string) {
    this.searchUrl = 'https://api.spotify.com/v1/search?q=' + str + '&type=artist&limit=12';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.AccessToken);
    // console.log(str);
    return this.http.get(this.searchUrl, {headers});
  }

  getArtistId(id: string) {
    this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.AccessToken);
    // console.log(id);
    return this.http.get(this.artistUrl, {headers});
  }

  getTopArtistTracks(id: string) {
    this.topartisttracks = 'https://api.spotify.com/v1/artists/' + id + '/top-tracks?country=PL';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.AccessToken);
    return this.http.get(this.topartisttracks, {headers});
  }

  getAlbums(id: string) {
    this.albums = 'https://api.spotify.com/v1/artists/' + id + '/albums';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.AccessToken);
    return this.http.get(this.albums, {headers});
  }

  getAlbumsWithTracks(albumid: string) {
    this.albumswithtracks = 'https://api.spotify.com/v1/albums/' + albumid + '/tracks';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.AccessToken);
    return this.http.get(this.albumswithtracks, {headers});
  }

  getRealAlbums(id: string) {
    this.RealAlbums = 'https://api.spotify.com/v1/albums/' + id;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.AccessToken);
    return this.http.get(this.RealAlbums , {headers});
  }
}
