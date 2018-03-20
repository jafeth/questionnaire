import { Injectable } from '@angular/core';
import { QuestionBase } from './models/question-base';
import { FormBuilder } from '@angular/forms';
import { GroupBase } from './models/group-base';
import { SteppedQuestion } from './models/stepped-question';

@Injectable()
export class QuestionControlService {

  constructor(private fb: FormBuilder) {
  }

  toFormGroup(questions: QuestionBase<any>[]) {
    const group = this.buildGroup(questions);

    return this.fb.group(group);
  }

  private buildGroup(questions: QuestionBase<any>[]) {
    const group: any = {};
    questions
      .sort(((a, b) => a.order - b.order))
      .forEach(question => {
        if (question instanceof SteppedQuestion) {
          group[ question.key ] = this.fb.group(this.buildGroup(question.steps));
          return;
        }
        if (question instanceof GroupBase) {
          group[ question.key ] = this.fb.group(this.buildGroup(question.questions));
          return;
        }
        group[ question.key ] = [ question.value , question.validators ];
      });

    return group;
  }

}
