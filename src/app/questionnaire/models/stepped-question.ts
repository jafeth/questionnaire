import { SurveyStep } from './survey-step';
import { QuestionBase } from './question-base';

export class SteppedQuestion extends QuestionBase<any> {
  steps: SurveyStep[];

  constructor(options: {} = {}) {
    super(options);
    this.steps = options[ 'steps' ];
    this.controlType = 'stepper';
  }
}
