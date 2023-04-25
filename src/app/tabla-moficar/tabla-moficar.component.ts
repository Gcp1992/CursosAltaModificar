import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nivel } from '../_modelo/nivel';
import { CursoServioService } from '../curso-servio.service';
import { Curso } from '../_modelo/curso';
@Component({
  selector: 'app-tabla-moficar',
  templateUrl: './tabla-moficar.component.html',
  styleUrls: ['./tabla-moficar.component.css'],
})
export class TablaMoficarComponent implements OnInit {
  curso_propio: Curso | undefined;
  cuadroId: number | undefined; /*
  cuadroNombre:string="";
  cuadroDuracion:number=0;
  cuadroNivel:Nivel;*/

  constructor(
    public activarRoot: ActivatedRoute,
    public myService: CursoServioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Para recibir el id que se pasa como parámetro
    //Se trata del mismo id que le pasamos con parámetro al path
    //this.cuadroId=Number.parseInt(this.activarRoot.snapshot.params['id']);
    this.activarRoot.params.subscribe((data) => {
      this.cuadroId = data['id'];
      console.log(data);
      //Para enviar información de manera dinámica
      //item:elemento actual, index: indice, arr:array completo
      //Compara el id que recibe la URL como parámetro con el id de ese elemento actual
      this.myService.cursos.map((item, index, arr) => {
        if (item._id == this.cuadroId) this.curso_propio = item;
      });

      if (typeof this.cuadroId == 'undefined') {
        this.curso_propio = new Curso(0, '', 0, Nivel.Iniciacion);
      }
    });
  }

  updateCurso() {
    if (typeof this.cuadroId == 'number') {
      //this.myService.actualizarCursosServicio(this.curso_propio!);
      this.router.navigate(['']);
    } else {
      this.myService.subirCurso(this.curso_propio!);
      this.router.navigate(['']);
    }
  }
}
