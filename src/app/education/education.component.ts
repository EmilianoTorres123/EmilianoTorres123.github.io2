import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let educa1 = {
      fecha: "2017-2019",
      Grado: "tecnico mecatronico",
      escuela: "CBTIS 47 DE CORDOBA",
  };

  let educa2 = {
    fecha: "2020-2025",
    Grado: "Ingenierio Software",
    escuela: "Universidad veracruna, Facultad de negocios y tecnologias",
};
this.education.push(educa1);
this.education.push(educa2);
}

}
