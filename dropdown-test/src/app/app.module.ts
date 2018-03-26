import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMultiSelectModule } from './angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HandleDropdownComponent } from './handle-dropdown/handle-dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    HandleDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularMultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
