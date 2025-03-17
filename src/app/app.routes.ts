import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { ScreenPrintingComponent } from './screen-printing/screen-printing.component';
import { ForstingComponent } from './forsting/forsting.component';
import { ColorCoatingComponent } from './color-coating/color-coating.component';
import { HotFoilStampingComponent } from './hot-foil-stamping/hot-foil-stamping.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServiceComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'screen-printing', component: ScreenPrintingComponent},
  { path: 'frosting', component: ForstingComponent},
  { path: 'color-coating', component: ColorCoatingComponent},
  { path: 'hot-foil-stamping', component: HotFoilStampingComponent},

];
