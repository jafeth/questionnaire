import { GroupBase } from './group-base';

export class SurveyStep extends GroupBase<any> {
  constructor(options: {} = {}) {
    super(options);
    this.controlType = 'step';
  }
}
