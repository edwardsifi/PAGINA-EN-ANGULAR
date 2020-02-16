import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { IndexContComponent } from './index-cont/index-cont.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { MiservicioService} from './servicio/miservicio.service';

import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    IndexContComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    PostComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MiservicioService],
  bootstrap: [AppComponent]
})
export class AppModule { } 
