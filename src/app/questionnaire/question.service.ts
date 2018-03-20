import { Injectable } from '@angular/core';
import { DropdownQuestion } from './models/dropdown-question';
import { TextboxQuestion } from './models/textbox-question';
import { Validators } from '@angular/forms';
import { ChoiceQuestion } from './models/choice-question';
import { Survey } from './models/survey';
import { ListQuestion } from './models/list-question';
import { SteppedQuestion } from './models/stepped-question';
import { SurveyStep } from './models/survey-step';

@Injectable()
export class QuestionService {

  constructor() {
  }

  getSimpleSurvey() {
    const survey = new Survey();
    survey.title = 'Job Application for Heroes';
    survey.questions = [
      new DropdownQuestion<string>({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { value: 'solid', label: 'Solid' },
          { value: 'great', label: 'Great' },
          { value: 'good', label: 'Good' },
          { value: 'unproven', label: 'Unproven' }
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
        order: 2
      }),
      new ChoiceQuestion<number>({
        key: 'alignment',
        label: 'Alignment',
        options: [
          { value: -1, label: 'Evil' },
          { value: 0, label: 'Neutral' },
          { value: 1, label: 'Good' }
        ],
        value: 0,
        order: 4
      }),
      new ListQuestion<number>({
        key: 'powers',
        label: 'Powers',
        questions: [
          new ChoiceQuestion<number>({
            key: 'strength',
            label: 'Strength',
            options: [
              { value: 1, label: 'Low' },
              { value: 2, label: 'Neutral' },
              { value: 3, label: 'High' },
              { value: 4, label: 'Extreme' }
            ],
            value: 2,
            order: 1
          }),
          new ChoiceQuestion<number>({
            key: 'speed',
            label: 'Speed',
            options: [
              { value: 1, label: 'Low' },
              { value: 2, label: 'Neutral' },
              { value: 3, label: 'High' },
              { value: 4, label: 'Extreme' }
            ],
            value: 2,
            order: 2
          }),
          new ChoiceQuestion<number>({
            key: 'toughness',
            label: 'Toughness',
            options: [
              { value: 1, label: 'Low' },
              { value: 2, label: 'Neutral' },
              { value: 3, label: 'High' },
              { value: 4, label: 'Extreme' }
            ],
            value: 2,
            order: 3
          })
        ],
        order: 5
      })
    ];

    return survey;

  }

  getSteppedSurvey() {
    const survey = new Survey();
    survey.title = 'Job Application for Heroes';
    survey.questions = [
      new SteppedQuestion({
        key: 'stepped',
        steps: [
          new SurveyStep({
            key: 'contact',
            label: 'Contact Information',
            questions: [
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
                order: 2
              }),
            ],
            order: 1
          }),
          new SurveyStep({
            key: 'attitude',
            label: 'Attitude',
            questions: [
              new DropdownQuestion<string>({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                  { value: 'solid', label: 'Solid' },
                  { value: 'great', label: 'Great' },
                  { value: 'good', label: 'Good' },
                  { value: 'unproven', label: 'Unproven' }
                ],
                order: 1
              }),
              new ChoiceQuestion<number>({
                key: 'alignment',
                label: 'Alignment',
                options: [
                  { value: -1, label: 'Evil' },
                  { value: 0, label: 'Neutral' },
                  { value: 1, label: 'Good' }
                ],
                value: 0,
                order: 2
              }),
            ],
            order: 2
          }),
          new SurveyStep({
            key: 'powers',
            label: 'Powers',
            questions: [
              new ChoiceQuestion<number>({
                key: 'strength',
                label: 'Strength',
                options: [
                  { value: 1, label: 'Low' },
                  { value: 2, label: 'Neutral' },
                  { value: 3, label: 'High' },
                  { value: 4, label: 'Extreme' }
                ],
                value: 2,
                order: 1
              }),
              new ChoiceQuestion<number>({
                key: 'speed',
                label: 'Speed',
                options: [
                  { value: 1, label: 'Low' },
                  { value: 2, label: 'Neutral' },
                  { value: 3, label: 'High' },
                  { value: 4, label: 'Extreme' }
                ],
                value: 2,
                order: 2
              }),
              new ChoiceQuestion<number>({
                key: 'toughness',
                label: 'Toughness',
                options: [
                  { value: 1, label: 'Low' },
                  { value: 2, label: 'Neutral' },
                  { value: 3, label: 'High' },
                  { value: 4, label: 'Extreme' }
                ],
                value: 2,
                order: 3
              })
            ],
            order: 3
          })
        ],
      }),
    ];

    return survey;

  }


}
