import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/user/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userInfo:any;
  constructor(
    private _profile : ProfileService
  ) { 
    this._profile.getData().subscribe(data=>{
      this.userInfo = data;
    }) 
  }

  ngOnInit(): void {
  }

}
