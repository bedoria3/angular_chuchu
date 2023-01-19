import { FourthComponent } from './fourth/fourth.component';
import { ThirdComponent } from './third/third.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent},
  { path: 'second-component', component: SecondComponent},
  { path: 'third-component', component: ThirdComponent},
  { path: 'fourth-component', component: FourthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
