import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { NestedContentComponent } from './nested-content/nested-content.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HeroService } from './services/hero.service';
import { TestService } from './services/test.service';
import { TimeComponent } from './time/time.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroComponent,
    NestedContentComponent,
    HighlightDirective,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HeroService,
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
