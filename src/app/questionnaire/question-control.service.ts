import { Injectable } from '@angular/core';
import { QuestionBase } from './models/question-base';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class QuestionControlService {

  constructor() {
  }

  toFormGroup(questions: QuestionBase<any>[]) {
    const group: any = {};

    questions.forEach(question => {
      group[ question.key ] = new FormControl(question.value || '', question.validators);
    });

    return new FormGroup(group);
  }

}
