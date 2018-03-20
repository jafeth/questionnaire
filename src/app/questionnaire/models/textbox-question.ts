import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.controlType = 'textbox';
    this.type = options[ 'type' ] || '';
  }
}
