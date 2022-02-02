import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
{
  path : "",
  loadChildren : ()=>import("./admin/admin.module").then(a=>a.AdminModule)
},
{
  path : "teacher",
  loadChildren : ()=>import("./teacher/teacher.module").then(b=>b.TeacherModule)
},
{
  path : "student",
  loadChildren : ()=>import("./student/student.module").then(c=>c.StudentModule)
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
