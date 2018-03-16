import { Component, Input, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { DropdownQuestion } from '../../models/dropdown-question';

@Component({
  selector: 'qcm-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() question: DropdownQuestion;
  @Input() control: FormControl;
  constructor() { }

  ngOnInit() {
  }

}
