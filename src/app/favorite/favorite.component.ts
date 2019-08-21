import { Component, OnInit, Input, Output, EventEmitter, ɵConsole } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  //template: `
    // <div class="glyphicon"
    //   [class.glyphicon-star]="isFavorite"
    //   [class.glyphicon-star-empty]="!isFavorite"
    //   (click)="toggleFavorite()">
    // </div>
    // `,
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent  {
  @Input() isSelected: boolean;
  @Output() change = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    // pass in object as a param
    this.change.emit({ newValue: this.isSelected });
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}