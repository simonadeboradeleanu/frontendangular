import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserApiServiceService } from 'src/app/user-api.service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  implements OnInit {

  constructor(private service:UserApiServiceService) { }
  userList$!: Observable<any[]>;

  ngOnInit(): void{ 
    this.userList$ = this.service.getUserList();
  }

}
