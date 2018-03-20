import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../../question-control.service';
import { Survey } from '../../models/survey';

@Component({
  selector: 'qcm-form',
  templateUrl: './form.component.html',
  styleUrls: [ './form.component.css' ],
  providers: [ QuestionControlService ]
})
export class FormComponent implements OnInit {
  @Input() survey: Survey;
  @Output() save = new EventEmitter<any>();

  form: FormGroup;

  constructor(private qcs: QuestionControlService) {
  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.survey.questions);
    console.log(this.form);
  }

  submit() {
    this.save.emit(this.form.value);
  }

  reset() {
    this.form.reset({});
  }

  get questions() {
    return this.survey.questions.sort(((a, b) => a.order - b.order));
  }


}
