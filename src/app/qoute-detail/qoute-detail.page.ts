import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-qoute-detail',
  templateUrl: './qoute-detail.page.html',
  styleUrls: ['./qoute-detail.page.scss'],
})
export class QouteDetailPage implements OnInit {
  qouteid:any;
  constructor(private activateRoute: ActivatedRoute , private dataService:DataService , public auth: AuthService) { }

  ngOnInit() {

    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.dataService.getData(`qoutes/${id}`).subscribe(data => {
       this.qouteid = data
       console.log(this.qouteid)
    })
    
  }

}
