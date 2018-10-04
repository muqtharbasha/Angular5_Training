import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route} from '@angular/router'

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { NestedContentComponent } from './nested-content/nested-content.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HeroService } from './services/hero.service';
import { TestService } from './services/test.service';
import { TimeComponent } from './time/time.component';
import { ShortenPipe } from './pipes/shorten/shorten.pipe';
import { AuthGuard } from './guards/auth-guard.service';

const routes: Route[] = [{
  path: 'heroes',
  component: HeroesComponent
}, {
  path: 'nested',
  component: NestedContentComponent,
  canActivate: [AuthGuard]
}, {
  path: 'time',
  component: TimeComponent
}, {
  path: '**',
  redirectTo: 'heroes'
}]

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroComponent,
    NestedContentComponent,
    HighlightDirective,
    TimeComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    HeroService,
    TestService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
