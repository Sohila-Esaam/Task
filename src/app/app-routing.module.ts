import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:"" , redirectTo:'home' , pathMatch:'full'},
  {path:"home" , component: HomeComponent},
  {path:"about" , component: AboutComponent},
  {path:"contact" , component: ContactComponent},
  {path:"courses" , component: CoursesComponent},
  {path:"**" , component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
