import { Injectable } from '@angular/core';

@Injectable()

export class FormService{
    getStudents(){
        return[
            {"id":1, "name":"kavya", "gender":"Female"},
            {"id":2, "name":"spider","gender":"Male"}
        ]
    }
}