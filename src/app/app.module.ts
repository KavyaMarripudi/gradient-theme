import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {MenuItems} from './shared/menu-items/menu-items';
import {BreadcrumbsComponent} from './layout/admin/breadcrumbs/breadcrumbs.component';
import { FormComponent } from './form/form.component';
import { SelectModule } from 'ng-select';
import { SeefComponent } from './seef/seef.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsModule } from '@angular/forms';
import { ImageComponent } from './image/image.component';
import { ChildbuttonComponent } from './childbutton/childbutton.component';
import { Childbutton1Component } from './childbutton1/childbutton1.component';
import { Childbutton2Component } from './childbutton2/childbutton2.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    BreadcrumbsComponent,
    FormComponent,
    SeefComponent,
    ButtonsComponent,
    ImageComponent,
    ChildbuttonComponent,
    Childbutton1Component,
    Childbutton2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    SelectModule,
    FormsModule
  ],
  providers: [MenuItems],
  bootstrap: [AppComponent]
})
export class AppModule { }
