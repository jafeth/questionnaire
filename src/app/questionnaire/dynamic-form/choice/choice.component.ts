import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChoiceQuestion } from '../../models/choice-question';

@Component({
  selector: 'qcm-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {
  @Input() question: ChoiceQuestion;
  @Input() control: FormControl;
  constructor() { }

  ngOnInit() {
  }

}
