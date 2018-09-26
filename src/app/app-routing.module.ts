import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeefComponent } from './seef/seef.component';
import { ImageComponent } from './image/image.component';
import { ButtonsComponent } from './buttons/buttons.component';

const routes: Routes = [
  { path: '', component: SeefComponent },
  { path:'image', component:ImageComponent},
  { path:'seef', component:SeefComponent},
  { path:'button', component:ButtonsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
