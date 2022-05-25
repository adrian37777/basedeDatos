import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRountigModule } from './app-rountig.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrerComponent } from './auth/registrer/registrer.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SidebarsComponent } from './shared/sidebars/sidebars.component';
import { HeaderComponent } from './shared/header/header.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrerComponent,
    NopagefoundComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    SidebarsComponent,
    HeaderComponent,
    PagesComponent,
  ],
  imports: [BrowserModule, AppRountigModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
