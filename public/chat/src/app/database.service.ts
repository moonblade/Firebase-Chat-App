import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import 'firebase/database';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  items: Object;
  db: AngularFireDatabase;
  constructor(db: AngularFireDatabase) {
    this.db = db;
    this.items = {};
    this.subscribe('channel');
  }

  subscribe(channel: string) {
    const item = this.db.list<Message>(channel);
    return item.valueChanges().subscribe((value) => this.subscription(value, channel));
  }

  send(channel: string, text: string) {
    const item = this.db.list<Message>(channel);
    item.push(new Message(text).toJson());
  }

  subscription(value: any, channel: string) {
    console.log(value);
    console.log(channel);
  }
}
