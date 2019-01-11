import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsersQueryComponent } from './users/users-query/users-query.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';
import { UsersViewComponent } from './users/users-view/users-view.component';

import { HttpTransferService } from './shared/service/http-transfer.service';
import { UsersService } from './shared/service/users.service';

import { ErrorMessagePipe } from './shared/pipe/error-message.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersQueryComponent,
    UsersEditComponent,
    UsersViewComponent,
    ErrorMessagePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
