import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  public input: string;
  private db: DatabaseService;
  constructor(db: DatabaseService) {
    this.db = db;
  }

  ngOnInit(): void {
    this.clearInput();
  }

  clearInput() {
    this.input = '';
  }

  send(): void {
    this.db.send('channel', this.input);
    this.clearInput();
  }

}
