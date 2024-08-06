import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  imagesList:any;

  constructor(private _ApiService:ApiService) {}

  ngOnInit(): void {
    this._ApiService.getImages().subscribe(response =>{
      this.imagesList = response.data[0];
  
    })
  }
}
