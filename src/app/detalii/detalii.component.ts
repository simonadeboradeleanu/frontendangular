import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DetaliiServiceService } from '../detalii-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalii',
  templateUrl: './detalii.component.html',
  styleUrls: ['./detalii.component.css']
})
export class DetaliiComponent implements OnInit {
  detail!: any;

  constructor(private route: ActivatedRoute, private service:DetaliiServiceService) { }

  ngOnInit(): void{ 
    const sharkId = Number(this.route.snapshot.paramMap.get('id'));
    this.detail = this.service.fct(sharkId);
    //this.detail = this.service.fct(1);
    console.log(this.detail);
    this.detail.subscribe((details: any[]) => {
      console.log(details);
      this.detail=details; 
    });
    
  }

}
