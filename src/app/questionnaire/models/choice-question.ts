import { QuestionBase } from './question-base';
import { ChoiceItem } from './choice-item';

export class ChoiceQuestion<T> extends QuestionBase<T> {
  options: ChoiceItem<T>[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options[ 'options' ] || [];
    this.controlType = 'choice';
  }
}
