import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { SharkApiService } from 'src/app/shark-api.service';

@Component({
  selector: 'app-cinci',
  templateUrl: './cinci.component.html',
  styleUrls: ['./cinci.component.css']
})

export class CinciComponent implements OnInit{
 
  sharkList$!: Observable<any[]>;
  //sharkList$: any=[];
  oceanList$!: Observable<any[]>;
  oceanList: any=[]; 

  //map to display data associate with foreign key
  oceaanListMap: Map<number, string> = new Map();

  constructor(private service:SharkApiService) { }

  ngOnInit(): void{ 
    this.sharkList$ = this.service.getSharksByOceanId(5);
  }
}
