import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PayComponent } from './pay/pay.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailService } from './pay/email.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, MainComponent, PayComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
  providers: [EmailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
