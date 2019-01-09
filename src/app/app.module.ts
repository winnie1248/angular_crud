import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsersQueryComponent } from './users/users-query/users-query.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';
import { UsersViewComponent } from './users/users-view/users-view.component';

import { HttpTransferService } from './shared/service/http-transfer.service';
import { UsersService } from './shared/service/users.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersQueryComponent,
    UsersEditComponent,
    UsersViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpTransferService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
