import { Component, Input, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../../models/question-base';

@Component({
  selector: 'qcm-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  constructor() {}

  ngOnInit() {}

  get control() {
    return this.form.controls[this.question.key];
  }

}
