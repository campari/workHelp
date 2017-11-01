import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.form = new FormGroup(
      {
        name: new FormControl(null,Validators.required ,this.banNamesA.bind(this)),
        email: new FormControl(null, [Validators.email]),
        state: new FormControl(this.values[0])
      }
    );
  }
  values: string[] = ['Stable', 'Critical', 'Finished'];
  form: FormGroup;
  banList: string[] = ["Test"];


  onSubmit(){
    console.log(this.form.value);
  }

  banNames(control: FormControl) : {[s: string]: boolean}{
    if(this.banList.indexOf(control.value) !== -1){
      return {'bannedName' : true};
    }else{
      return null;
    }
  }

  banNamesA(control: FormControl) : Promise<any> | Observable<any>{
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(
          () => {
            if(control.value == 'Test'){
              resolve({bannedName: true});
            }else{
              resolve(null);
            }
          }
          ,2000
        );
        
      }
    );
    return promise;
  }

}
