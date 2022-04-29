import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
