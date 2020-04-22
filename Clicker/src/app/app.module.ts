import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsernameComponent } from './username/username.component';
import { UsergreetingComponent } from './usergreeting/usergreeting.component';
import { ButtonClickComponent } from './button-click/button-click.component';
import { TimerComponent } from './timer/timer.component';
import { ResultsTableComponent } from './results-table/results-table.component';
import { BtnSaveDeleteAccountComponent } from './btn-save-delete-account/btn-save-delete-account.component';
import { BtnShowAllResultsComponent } from './btn-show-all-results/btn-show-all-results.component';

@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent,
    UsergreetingComponent,
    ButtonClickComponent,
    TimerComponent,
    ResultsTableComponent,
    BtnSaveDeleteAccountComponent,
    BtnShowAllResultsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
