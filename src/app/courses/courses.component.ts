import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  dataList:any;

  constructor(private _ApiService:ApiService) {}

  ngOnInit(): void {
    this._ApiService.getData().subscribe(response =>{
      this.dataList = response.data;
      console.log(this.dataList);
    })
  }

}
