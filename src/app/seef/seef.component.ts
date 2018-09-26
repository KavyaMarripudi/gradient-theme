import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-seef',
  templateUrl: './seef.component.html',
  styleUrls: ['./seef.component.scss']
})
export class SeefComponent implements OnInit {
 @ViewChild('f') signupForm:NgForm;
  simpleOption:any[];
  selectionOption:any[];
  constructor() { }
//  onSubmit(form:NgForm){
//    console.log(form)
//  }
onSubmit(){
  console.log(this.signupForm);
}
  ngOnInit() {
    this.simpleOption=[
      {label:"ECE",value:'Ece'},
      {label:"CSE",value:'Cse'},
      {label:"MECHANICAL", value:'mech'},
      {label:"IT", value:'It'},
      {label:"EEE", value:'Eee'}
   ]
   this.selectionOption=[
      {label:"A", value:'A'},
      {label:"B", value:'B'},
      {label:"C", value:'C'},
      {label:"D", value:'D'}
  ]
  }
  

}
