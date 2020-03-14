import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-window',
  templateUrl: './text-window.component.html',
  styleUrls: ['./text-window.component.scss']
})
export class TextWindowComponent implements OnInit {
  channel: string;

  constructor() { }

  ngOnInit(): void {
    this.channel = 'testChannel';
  }

}
