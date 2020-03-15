import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  public input: String;
  constructor() { }

  ngOnInit(): void {
    this.clearInput();
  }
  
  clearInput() {
    this.input = '';
  }

  send(): void {
    console.log(this.input);
    this.clearInput();
  }

}
