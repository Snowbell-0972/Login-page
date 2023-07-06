import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  

  constructor() { }

  userLogin(data:any){
    console.warn(data)
    let b=data;
     fetch('assets/text file/registration.txt')
    .then(responce => responce.text())
    .then(data => {
      const users = data.split('\n');

      const isValidUser = users.some(user => {
        const [storedEmail, storedPassword] = user.split(',');

        return storedEmail.trim() == b.email && storedPassword.trim() === b.password;
      });

      if(isValidUser){
        alert('Valid user')
      } else {
        alert('Invalid user')
      }
    })
    .catch(error => {
      console.error('Error reading user data:',error);
    });
  }
}
