import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  item: Observable<any>;
  constructor(db: AngularFireDatabase) {
    this.item = db.object('chat').valueChanges();
    console.log(this.item);
    this.item.subscribe(this.subscription);
  }

  subscription(event: Event) {
    console.log(event);
  }
}
