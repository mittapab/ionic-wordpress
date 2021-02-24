import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-qoutes',
  templateUrl: './qoutes.page.html',
  styleUrls: ['./qoutes.page.scss'],
})
export class QoutesPage implements OnInit {
  
  qoutes:any = []

  constructor(private dataService: DataService , public auth: AuthService) {

    this.dataService.getData('qoutes').subscribe( data => { 
      console.log(data) 
      setTimeout(()=> { this.qoutes = data} , 2000)
       });
   
}
  
  
  ngOnInit() {}


}
