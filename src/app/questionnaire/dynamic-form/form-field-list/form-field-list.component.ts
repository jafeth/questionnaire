import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ListQuestion } from '../../models/list-question';

@Component({
  selector: 'qcm-form-field-list',
  templateUrl: './form-field-list.component.html',
  styleUrls: [ './form-field-list.component.css' ]
})
export class FormFieldListComponent {
  @Input() list: ListQuestion<any>;
  @Input() control: FormGroup;

  constructor() {
  }

  get questions() {
    return this.list.questions.sort(((a, b) => a.order - b.order));
  }
}
