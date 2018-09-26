import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormService } from '../form.service';
// import {SelectOptionService} from './.././shared/elements/select-option.service';
// import {IOption} from 'ng-select';


@Component({
    selector: 'app-form',
    templateUrl :'./form.component.html',
    styleUrls :['./form.component.css']
})

export class FormComponent implements OnInit{

      toggleParentDetails:boolean=false;
      simpleOption:any[];
      studentDetails:any[];

    // formService: any;

    
    constructor(private formService: FormService) { }
   ngOnInit(){
       this.simpleOption=[
           {label:"male",value:'Male'},
           {label:"female",value:'Female'},
           {label:"other", value:'other'}
        ]

        this.studentDetails = this.formService.getStudents();
    } 
      toggleClick(){
          console.log("click")
       this.toggleParentDetails = !this.toggleParentDetails;
      }

    

}