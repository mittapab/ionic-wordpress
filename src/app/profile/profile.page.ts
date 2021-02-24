import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  model:any = {}
  constructor(public auth: AuthService) { }
 
  ngOnInit() {
  }

  onLogin(f){

    this.auth.postLogin(f.value).subscribe(data => {
      console.log(data)
      this.auth.isAuth.next(true);
    } ,
    err => {
      console.log(err)
      this.auth.isAuth.next(false);
    });
  }

  onLogout(){
    this.auth.isAuth.next(false)
  }

}
