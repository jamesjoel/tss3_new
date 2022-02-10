import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../user/services/auth.service';
import { RestoAuthService } from 'src/app/resto/services/resto.auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public _auth : AuthService,
    public _restoauth : RestoAuthService
  ) { }

  ngOnInit(): void {
  }

}
