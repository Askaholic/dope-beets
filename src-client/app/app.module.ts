import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { ApiService } from './services/api.service';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BiddingComponent } from './components/bidding/bidding.component';
import { VegetableComponent } from './components/vegetable/vegetable.component';
import { VerbotenComponent } from './components/verboten/verboten.component';
import { BidComponent } from './components/bidding/bid/bid.component';



const appRoutes: Routes = [
  { path: 'login',      component: LoginComponent },
  { path: 'user/:iz',   component: BiddingComponent },
  { path: 'verboten',   component: VerbotenComponent },
  { path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BiddingComponent,
    VegetableComponent,
    VerbotenComponent,
    BidComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    //   { enableTracing: !environment.production } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
      ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
