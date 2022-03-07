import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor(
    private _http : HttpClient
  ) { }

  ngOnInit(): void {
  }

  upload(obj:any){
      let file = obj.files[0];
      let form = new FormData();
      form.append("myfile" , file);

      this._http.post<any>("http://localhost:3000/api/upload" , form).subscribe(data=>{
        console.log (data);
      })
  }
  
}
