import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterSampleComponent } from './components/counter-sample/counter-sample.component';


const routes: Routes = [
  { path: '', component: CounterSampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
