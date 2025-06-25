import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private authService: AuthService){}
  title = 'digital-library';

  loginAsLibrarian() {
   this.authService.loginAsLibrarian().subscribe();
  //  this.authService.getCurrRole()
  }

  loginAsUser() {
    alert('You expect too much! Implement login as User yourself!');
    // Add navigation logic here
  }
}
