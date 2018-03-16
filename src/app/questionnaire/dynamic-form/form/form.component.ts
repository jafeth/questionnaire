import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../../question-control.service';
import { QuestionBase } from '../../models/question-base';

@Component({
  selector: 'qcm-form',
  templateUrl: './form.component.html',
  styleUrls: [ './form.component.css' ],
  providers: [ QuestionControlService ]
})
export class FormComponent implements OnInit {
  @Input() title: string;
  @Input() questions: QuestionBase<any>[] = [];
  @Output() save = new EventEmitter<any>();

  form: FormGroup;

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  submit() {
    this.save.emit(this.form.value);
  }

  reset() {
    this.form.reset({});
  }



}
