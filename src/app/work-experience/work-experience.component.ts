import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let work1 = {
      fecha: "2018-2019",
      ubicacion: "potreo Ver.",
      puesto: "hacia bebidas",
      empresa: "feria",
      logros:[
        {descripcion: "hacia bebidas para el publico"},
        {descripcion: "luego ayudaba armar el lugar de trabajo"}
      ]
    };

    let work2 = {
      fecha: "2014-2017",
      ubicacion: "orizaba ver",
      puesto: "testing",
      empresa: "logitech",
      logros:[
        {descripcion: "hacia pruebas de software"},
        {descripcion: "tambien me hacia programas en angular"}
      ]
    };

    let work3 = {
      fecha: "2019-2020",
      ubicacion: "Cordoba Ver.",
      puesto: "programador",
      empresa: "google",
      logros:[
        {descripcion: "desarrollo software para gogle"},
        {descripcion: "manejp diferentes lenguajes para progrmacion"}
      ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
    this.workExperience.push(work3);
  }

}
