import { Component, Input } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../../models/question-base';

@Component({
  selector: 'qcm-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: [ './form-field.component.css' ]
})
export class FormFieldComponent {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  constructor() {
  }

  get control() {
    return this.form.get(this.question.key);
  }

}
