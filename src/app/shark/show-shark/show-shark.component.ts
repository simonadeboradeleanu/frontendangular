import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { SharkApiService } from 'src/app/shark-api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-show-shark',
  templateUrl: './show-shark.component.html',
  styleUrls: ['./show-shark.component.css']
})

export class ShowSharkComponent implements OnInit{
 
  sharkList$!: Observable<any[]>;


  constructor(private service:SharkApiService) { }

  ngOnInit(): void{ 
    this.sharkList$ = this.service.getSharkList();
  }

}

