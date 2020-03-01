import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainWindowComponent } from './chat-window/chat-window.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  'path': 'main',
  'component': MainWindowComponent
}, {
  path: '',
  redirectTo: '/main',
  pathMatch: 'full'
}, {
  'path': 'login',
  'component': LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
