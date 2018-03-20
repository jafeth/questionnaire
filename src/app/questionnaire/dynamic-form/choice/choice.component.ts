import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChoiceQuestion } from '../../models/choice-question';

@Component({
  selector: 'qcm-choice',
  templateUrl: './choice.component.html',
  styleUrls: [ './choice.component.css' ]
})
export class ChoiceComponent {
  @Input() question: ChoiceQuestion<any>;
  @Input() control: FormControl;

  constructor() {
  }
}
