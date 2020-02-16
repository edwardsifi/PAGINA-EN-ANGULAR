import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexContComponent } from './index-cont/index-cont.component';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';
import { ContactComponent } from './contact/contact.component';
import { ComentariosComponent } from './comentarios/comentarios.component';

const routes: Routes = [
  {path:'',component:IndexContComponent},
  {path:'about',component:AboutComponent},
  {path:'post',component:PostComponent},
  {path:'contact',component:ContactComponent},
  {path:'index',component:IndexContComponent},
  {path:'comentarios',component:ComentariosComponent},
  {path:'**',pathMatch:'full',redirectTo:'index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
