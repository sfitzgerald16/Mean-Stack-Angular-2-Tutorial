import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentUrl;
  user;
  profileExists = false;
  message;
  messageClass;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params;
    this.authService.getUser(this.currentUrl.username).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
      } else  {
        this.user = data.user;
      }
    });
  }

}
