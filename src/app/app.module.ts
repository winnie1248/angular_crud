import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsersQueryComponent } from './users/users-query/users-query.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';
import { UsersViewComponent } from './users/users-view/users-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersQueryComponent,
    UsersEditComponent,
    UsersViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
