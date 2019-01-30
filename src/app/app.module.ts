import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './features/components/contact-list/contact-list.component';
import { ContactComponent } from './features/components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FirstUpperCaseLetterPipe } from './shared/first-upper-case-letter.pipe';
import { FormatPhoneNumberPipe } from './shared/format-phone-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactComponent,
    FirstUpperCaseLetterPipe,
    FormatPhoneNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
