import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SteppedQuestion } from '../../models/stepped-question';
import { SurveyStep } from '../../models/survey-step';

@Component({
  selector: 'qcm-form-stepper',
  templateUrl: './form-stepper.component.html',
  styleUrls: [ './form-stepper.component.css' ]
})
export class FormStepperComponent {
  @Input() question: SteppedQuestion;
  @Input() form: FormGroup;

  constructor() {
  }

  get steps() {
    return this.question.steps.sort(((a, b) => a.order - b.order));
  }

  getStepForm(step: SurveyStep) {
    return this.form.get(step.key);
  }

}
