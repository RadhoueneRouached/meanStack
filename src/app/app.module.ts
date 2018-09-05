import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http';
import { AdunitService } from './adunit.service'; // Substitutable objects wired together using dependency injection (DI)
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: '',
    component: IndexComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EditComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule, 
	MatToolbarModule,
	RouterModule.forRoot(routes),
	BrowserAnimationsModule, 
	SlimLoadingBarModule, 
	HttpClientModule, 
	ReactiveFormsModule
  ],
  providers: [ AdunitService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
