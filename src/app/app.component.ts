import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  UserName:string = "Enter UserName"

  userlist = []

  onclick(prouser){
    if(prouser.value.length > 0)
    {
      this.userlist.push(prouser.value);
      prouser.value = '';
    }
    
  }

  ondelete(deleteme){
    this.userlist.splice(deleteme,1)
  }

  //Summary
  //local ref variable
  //attribute binding
  //click event
  //function with parameter
  //Array
  //Array splice method
  //Array Push method
  //if condition
  //ngfor directives


}
