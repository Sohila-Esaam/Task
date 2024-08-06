import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  dataList:any;
  dataList1:any;
  dataList2:any;
  imagesList:any;

  constructor(private _ApiService:ApiService){}


  ngOnInit(): void {
    this._ApiService.getTestmonial().subscribe(response =>{
      this.dataList = response.data;
      console.log(this.dataList);

      this.dataList1 = this.dataList.slice(0,2);
      this.dataList2 = this.dataList.slice(2,4);
      console.log(this.dataList1);
      console.log(this.dataList2);
      
    })

    this._ApiService.getImages().subscribe(response =>{
      this.imagesList = response.data[0];
  
    })
  }

}
