import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArtistComponent } from './artist/artist.component';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumWithTracksComponent } from './album-with-tracks/album-with-tracks.component';

const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'artist/:id',
    component: ArtistComponent
  },

  {
    path: 'albums/:id',
    component: AlbumsComponent
  },

  {
    path: 'albumwithtracks/:id',
    component: AlbumWithTracksComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistComponent,
    AlbumsComponent,
    AlbumWithTracksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
