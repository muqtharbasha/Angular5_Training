import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { NestedContentComponent } from './nested-content/nested-content.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HeroService } from './services/hero.service';
import { TestService } from './services/test.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroComponent,
    NestedContentComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    HeroService,
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
