import { AngularFireDatabase } from '@angular/fire/database';
import { Component} from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items: any[];

  constructor( db: AngularFireDatabase) {
      db.list('portfolio').valueChanges()
      .subscribe(items =>
        this.items = items )
    }
   }
