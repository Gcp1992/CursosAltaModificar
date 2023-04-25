import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CursoServioService } from './curso-servio.service';
import { TablaCursosComponent } from './tabla-cursos/tabla-cursos.component';
import { TablaMoficarComponent } from './tabla-moficar/tabla-moficar.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaCursosComponent,
    TablaMoficarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CursoServioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
