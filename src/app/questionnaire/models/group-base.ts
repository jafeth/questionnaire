import { QuestionBase } from './question-base';

export class GroupBase<T> extends QuestionBase<T> {
  questions: QuestionBase<T>[];

  constructor(options: {} = {}) {
    super(options);
    this.questions = options[ 'questions' ];
  }
}
