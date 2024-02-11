import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core'; // do not forget the import 🙂

@Component({
  selector: 'app-show-ocean',
  templateUrl: './show-ocean.component.html',
  styleUrls: ['./show-ocean.component.css']
})
export class ShowOceanComponent {

  constructor(private router: Router,  public zone: NgZone) {}

  navigateTo(ocean: string) {
    //this.router.navigate([`${ocean}`]);
    this.zone.run(() => { this.router.navigate([`${ocean}`]); });

  }

}
