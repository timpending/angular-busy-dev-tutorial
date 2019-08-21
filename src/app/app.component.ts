import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';

  post = {
    title: "Title", 
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('fav changed: ', eventArgs); 
  }
}
