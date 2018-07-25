import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PopoverModule } from 'ngx-smart-popover';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
