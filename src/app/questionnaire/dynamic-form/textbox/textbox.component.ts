import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TextboxQuestion } from '../../models/textbox-question';

@Component({
  selector: 'qcm-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
  @Input() question: TextboxQuestion;
  @Input() control: FormControl;
  constructor() { }

  ngOnInit() {
  }

}
