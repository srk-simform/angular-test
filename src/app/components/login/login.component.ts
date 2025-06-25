import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { ROLES } from '../../constants/constant';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router){
  }
  title = 'digital-library';

  navigateToRespectivePage(){
    this.authService.getCurrRole().subscribe((user) => {
        if(user.role === ROLES.LIBR){
            this.router.navigate(['librarian'])
        }else if(user.role === ROLES.USER){
            this.router.navigate(['dashboard'])
        }
   });
  }
  loginAsLibrarian() {
   this.authService.loginAsLibrarian().subscribe();
   this.navigateToRespectivePage();
  }

  loginAsUser() {
    this.authService.loginAsUser().subscribe();
    this.navigateToRespectivePage();
  }
}
