import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [ MainComponent, WelcomeComponent, MenuComponent ],
  exports: [ MainComponent, WelcomeComponent ]
})
export class CoreModule {
}
