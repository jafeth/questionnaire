import { Injectable } from '@angular/core';
import { QuestionBase } from './models/question-base';
import { DropdownQuestion } from './models/dropdown-question';
import { TextboxQuestion } from './models/textbox-question';
import { Validators } from '@angular/forms';

@Injectable()
export class QuestionService {

  constructor() {
  }

  getQuestions() {
    const questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {value: 'solid', label: 'Solid'},
          {value: 'great', label: 'Great'},
          {value: 'good', label: 'Good'},
          {value: 'unproven', label: 'Unproven'}
        ],
        order: 3
      }),
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        validators: [ Validators.required ],
        order: 1
      }),
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        validators: [ Validators.email ],
        order: 2
      })
    ];

    return questions.sort(((a, b) => a.order - b.order));

  }


}
