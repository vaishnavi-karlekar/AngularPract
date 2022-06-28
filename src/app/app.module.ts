import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TestComponent } from './test/test.component';
import { DataComponent } from './data/data.component';
import { NameListComponent } from './name-list/name-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { MKGandhiComponent } from './m-k-gandhi/m-k-gandhi.component';
import { NehruComponent } from './nehru/nehru.component';
import { NanaComponent } from './nana/nana.component';
import { RailwayComponent } from './railway/railway.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TestComponent,
    DataComponent,
    NameListComponent,
    ContactDetailsComponent,
    MKGandhiComponent,
    NehruComponent,
    NanaComponent,
    RailwayComponent,
    PageNotFoundComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
