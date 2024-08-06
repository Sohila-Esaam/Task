import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  imagesList:any;

  constructor(private _ApiService:ApiService) {}

  ngOnInit(): void {
    this._ApiService.getImages().subscribe(response =>{
      this.imagesList = response.data[0];
    })
  }


}
