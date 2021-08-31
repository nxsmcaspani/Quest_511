import { Component, OnInit } from '@angular/core';
import { Developper } from '../common/developper.model';

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css']
})
export class DevelopperComponent implements OnInit {
  public developper:Developper;
  constructor() { }

  ngOnInit(): void {
    this.developper=new Developper("Maxime", "Caspani", 39, "Male", "Yet another wilder", [
      {name:"Angular", logo:"Angular", site:"angular.io"},
      {name:"Java", logo:"Java", site:"java.oracle.com"},
    ]);
  }

}
