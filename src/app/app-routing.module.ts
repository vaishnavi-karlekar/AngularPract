import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MKGandhiComponent } from './m-k-gandhi/m-k-gandhi.component';
import { NehruComponent } from './nehru/nehru.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RailwayComponent } from './railway/railway.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: '', redirectTo: "railway", pathMatch: 'full'},
  {path: "railway",component: RailwayComponent} ,
  {path: "gandhi" , component: MKGandhiComponent} ,
  {path: "nehru" , component: NehruComponent} ,
  {path: "test", component: TestComponent} ,
  {path: "**", component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
