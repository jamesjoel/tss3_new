import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  allImg : any[]=[];
  constructor(
    private _http : HttpClient
  ) {
    this._http.get<any>("http://localhost:3000/api/getimages").subscribe(data=>{
      this.allImg = data;
  })
    }
    path="";
  ngOnInit(): void {
  }
  upload(obj:any){
    // console.log(obj.file[0]);
    let file = obj.files[0];
    let form = new FormData();
    form.append("myfile", file);
    this._http.post<any>("http://localhost:3000/api/upload", form).subscribe(data=>{
      // console.log(data);
      this.allImg.push(data);
    })
  }

}
