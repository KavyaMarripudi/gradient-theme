import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// import {SelectOptionService} from './.././shared/elements/select-option.service';
// import {IOption} from 'ng-select';


@Component({
    selector: 'app-form',
    templateUrl :'./form.component.html',
    styleUrls :['./form.component.css']
})

export class FormComponent {

      toggleParentDetails:boolean=false;
      simpleOption:any[];

    //   simpleOption: Array<IOption> = this.selectOptionService.getCharacters();
    //     selectedOption = '3';
    //     isDisabled = true;
    //     characters: Array<IOption>;
    //     selectedCharacter = '3';
    //     timeLeft = 5;
   

    // constructor(public selectOptionService: SelectOptionService) { }
   ngOnInit(){
       this.simpleOption=[
           {label:"male",value:'Male'},
           {label:"female",value:'Female'},
           {label:"other", value:'other'}
        ]
    } 
      toggleClick(){
          console.log("click")
       this.toggleParentDetails = !this.toggleParentDetails;
      }

    

}