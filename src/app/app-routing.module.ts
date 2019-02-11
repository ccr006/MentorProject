import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { MentorComponent } from './mentor/mentor.component';
import { ResourcesComponent } from './resources/resources.component';
import { AboutComponent } from './about/about.component';





const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'student', component: StudentComponent },
  { path: 'mentor', component: MentorComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'about', component: AboutComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
