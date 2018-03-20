import { QuestionBase } from './question-base';

export class Survey {
  title: string;
  questions: QuestionBase<any>[];
}
