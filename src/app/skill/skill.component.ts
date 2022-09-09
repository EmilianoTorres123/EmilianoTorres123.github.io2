import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skill : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let skill = {
      programacion: "programador: ****",
      pensador: "pensador: *****",
      resolvedor_problemas: "resolvedor problemas: *****",
      lider: "lider: ***",
      creativo: "creativo: ***",
      comunicativo: "comunicativo: ****",
  };
  this.skill.push(skill);
  }
}
