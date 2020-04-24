import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ResultsTableComponent } from './results-table/results-table.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AccountGuard } from './account.guard';

const routes: Routes = [
  { path: 'account', component: UserAccountComponent, canActivate: [AccountGuard] },
  { path: 'login', component: UserLoginComponent },
  { path: 'results', component: ResultsTableComponent, canActivate: [AccountGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
