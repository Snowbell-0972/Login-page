import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

   username: string;
   email: string;
   password: string;
   reenterpassword: string

   onSubmit()
   {
      this.saveDataToFile("Username:"+this.username+"\nEmail:"+this.email+"\nPassword:"+this.password+"\nRe-Enter Password:"+this.reenterpassword);

   }

   saveDataToFile(data: string) {
      const fileData = new Blob([data], { type: 'text/plain' });
      const fileUrl = URL.createObjectURL(fileData);
  
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'registration.txt';
      link.click();
    }


  }
