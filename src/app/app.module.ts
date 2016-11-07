import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { PokedexService } from './service/pokedex.service';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { FilterTextPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    FilterTextPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [PokedexService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
