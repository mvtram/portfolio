import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { CarouselComponent } from './carousel/carousel.component';
import { WorkComponent } from './components/work/work.component';

import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { BlogsComponent } from './components/blogs/blogs.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent , pathMatch: 'full'},
  { path: 'mywork', component: WorkComponent },
  { path: 'blogs', component: BlogsComponent },

];
@NgModule({
  declarations: [
    AppComponent, CarouselComponent, WorkComponent , BlogsComponent, DashboardComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
