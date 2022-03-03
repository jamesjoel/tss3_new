import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userInfo:any;
  userImg:any;
  constructor(
    private _profile : ProfileService
  ) { 
    this._profile.getData().subscribe(data=>{
      // console.log(data);
      // return;
      this.userImg= data.imagepath;
      this.userInfo = data.dataa;
    })
   }

  ngOnInit(): void {
  }

}
