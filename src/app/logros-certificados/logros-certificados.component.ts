import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logros-certificados',
  templateUrl: './logros-certificados.component.html',
  styleUrls: ['./logros-certificados.component.css']
})
export class LogrosCertificadosComponent implements OnInit {

  certificados : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let logro1 = {
      certificacion: "titulo tecnico de mecatronica ",
      logros:[
        {descripcion: "me gradue por promedia en especialidades de tecnico en mecatronica"},
      ]
    };

    let logro2 = {
      certificacion: "reconocimiento por promedio",
      logros:[
        {descripcion: "programe una banda transportadora con plc"},
      ]
    };

    let logro3 = {
      certificacion: "certificado del lenguaje java",
      logros:[
        {descripcion: "Terminos un elevador por sensores arduinos"},
      ]
    };
    this.certificados.push(logro1);
    this.certificados.push(logro2);
    this.certificados.push(logro3);
  }

}
