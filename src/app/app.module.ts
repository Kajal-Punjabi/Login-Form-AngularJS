import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { UserFormComponent } from './user-form.component';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


