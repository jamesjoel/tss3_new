import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  allImg : any[]=[];
  constructor(private _http : HttpClient) { 
    this._http.get<any>("http://localhost:3000/api/getimages").subscribe(data=>{
      this.allImg = data;
      console.log(this.allImg);
    })
  }

  path ="";

  ngOnInit(): void {
  }

  upload(obj:any){
    // console.log(obj.files[0]);
    let file = obj.files[0];
    let form = new FormData();
    form.append("myfile", file);
    this._http.post<any>("http://localhost:3000/api/upload", form).subscribe(data=>{
      console.log(data);
      this.path = data.imagepath;
    })
  }

}
