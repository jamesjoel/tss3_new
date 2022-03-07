import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  upload(obj:any){
    console.log(obj.files[0]);
  }

}
