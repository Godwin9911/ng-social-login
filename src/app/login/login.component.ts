import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: SocialUser;

  constructor(private authService: AuthService,
              private router: Router) { }

  signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(users => {
      this.user = users;
      localStorage.setItem('user', JSON.stringify( this.user));
      this.router.navigate(['dashboard']);
    });

  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit() {
  }

}
