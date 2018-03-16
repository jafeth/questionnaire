import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'qcm-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: [ './questionnaire.component.css' ]
})
export class QuestionnaireComponent implements OnInit {
  questions: any[];
  payload = '';

  constructor(private service: QuestionService) {
    this.questions = service.getQuestions();
  }

  ngOnInit() {
  }

  onSave(formData) {
    console.log(formData);
    this.payload = formData;
  }
}
