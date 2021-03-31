import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListerPlaylistComponent } from './lister-playlist/lister-playlist.component';
import { AjoutPlaylistComponent } from './ajout-playlist/ajout-playlist.component';
import { SplashComponent } from './splash/splash.component';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { PlaylistsParCreateurComponent } from './playlists-par-createur/playlists-par-createur.component';
import { PlaylistsParStyleComponent } from './playlists-par-style/playlists-par-style.component';
import { PlaylistComponent } from './playlist/playlist.component';

const appRoutes: Routes = [
  {path: 'splash', component: SplashComponent},
  {path: 'ajouter', component: AjoutPlaylistComponent},
  {path: 'lister', component: ListerPlaylistComponent},
  {path: 'plStyle', component: PlaylistsParStyleComponent},
  {path: 'plCrea', component: PlaylistsParCreateurComponent},
  {path: '', component: SplashComponent},
  {path: '**', component: SplashComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ListerPlaylistComponent,
    AjoutPlaylistComponent,
    SplashComponent,
    PlaylistsParCreateurComponent,
    PlaylistsParStyleComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule, NgbModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
