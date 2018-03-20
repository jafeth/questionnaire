import { ValidatorFn } from '@angular/forms';

export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  validators: ValidatorFn[];
  order: number;
  controlType: string;

  constructor(options: { value?: T, key?: string, label?: string, validators?: ValidatorFn[], order?: number} = {}) {
    this.value = options.value;
    this.key = options.key;
    this.label = options.label;
    this.validators = options.validators;
    this.order = options.order;
  }
}
