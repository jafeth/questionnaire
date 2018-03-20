import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Survey } from '../models/survey';

@Component({
  selector: 'qcm-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: [ './questionnaire.component.css' ]
})
export class QuestionnaireComponent implements OnInit {
  survey: Survey;
  payload = '';

  constructor(private service: QuestionService) {
    this.survey = service.getSteppedSurvey();
  }

  ngOnInit() {
  }

  onSave(formData) {
    console.log(formData);
    this.payload = formData;
  }
}
