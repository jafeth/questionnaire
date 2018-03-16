import { QuestionBase } from './question-base';

export class ChoiceQuestion extends QuestionBase<any> {
  controlType = 'choice';
  options: { value: string, label: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options[ 'options' ] || [];
  }
}
