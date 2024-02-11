import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: any;
  //title = 'angulardotnet';

  constructor(private router: Router,  public zone: NgZone) {}

  navigateTo(x: string) {
    //this.router.navigate([`${ocean}`]);
    // this.zone.run(() => { this.router.navigate([`${x}`]); });
    this.router.navigate([`${x}`]);

  }
}

