import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionService } from './question.service';
import { FormComponent } from './dynamic-form/form/form.component';
import { FormFieldComponent } from './dynamic-form/form-field/form-field.component';
import { TextboxComponent } from './dynamic-form/textbox/textbox.component';
import { DropdownComponent } from './dynamic-form/dropdown/dropdown.component';
import { ChoiceComponent } from './dynamic-form/choice/choice.component';

@NgModule({
  imports: [
    SharedModule,
    QuestionnaireRoutingModule
  ],
  declarations: [
    FormComponent,
    FormFieldComponent,
    QuestionnaireComponent,
    TextboxComponent,
    DropdownComponent,
    ChoiceComponent
  ],
  exports: [],
  providers: [ QuestionService ]
})
export class QuestionnaireModule {
}
