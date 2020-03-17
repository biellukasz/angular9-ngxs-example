import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxsModule} from '@ngxs/store';
import {NgxsDispatchPluginModule} from '@ngxs-labs/dispatch-decorator';
import {CommonModule} from '@angular/common';
import {InventoryState} from './inventory.state';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    NgxsModule.forRoot([InventoryState]),
    NgxsDispatchPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
