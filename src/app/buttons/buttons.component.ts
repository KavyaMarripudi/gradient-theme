import { Component, Output} from '@angular/core';

@Component({
    selector: 'app-buttons',
    templateUrl:'./buttons.component.html',
    styleUrls:['./buttons.component.css'],
})

export class ButtonsComponent{ 
    toggleButton:boolean=false;
    toggleButton1:boolean=false;
    toggleButton2:boolean=false;

    showFirst() {
        if(this.toggleButton=true){
            this.toggleButton1=false,
            this.toggleButton2=false
        }
        else{
            this.toggleButton=false
        }
    }
    showSecond(){
        if(this.toggleButton1=true){
            this.toggleButton=false,
            this.toggleButton2=false
        }
        else{
            this.toggleButton1=false
        }
    }
    showThird(){
        if(this.toggleButton2=true){
            this.toggleButton=false,
            this.toggleButton1=false
        }
        else{
            this.toggleButton2=false
        }
    }

}

