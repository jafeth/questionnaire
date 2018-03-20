import { GroupBase } from './group-base';

export class ListQuestion<T> extends GroupBase<T> {

  constructor(options: {} = {}) {
    super(options);
    this.controlType = 'list';
  }
}
