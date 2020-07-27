import {Component, OnInit, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('is_bool')bool:boolean = true;
  @Output('ch') change = new EventEmitter();
  changeColor(){

    this.bool = !this.bool;
    this.change.emit(new Date());
  }

  ngOnInit(): void {
  }

}
