import { Component, Input } from '@angular/core';

import { FormControl } from '@angular/forms';
import { DropdownQuestion } from '../../models/dropdown-question';

@Component({
  selector: 'qcm-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: [ './dropdown.component.css' ]
})
export class DropdownComponent {
  @Input() question: DropdownQuestion<any>;
  @Input() control: FormControl;

  constructor() {
  }

}
