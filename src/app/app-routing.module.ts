import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './core/welcome/welcome.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  // { path: 'questionnaire', component: QuestionnaireComponent },
  { path: 'questionnaire', loadChildren: 'app/questionnaire/questionnaire.module#QuestionnaireModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
