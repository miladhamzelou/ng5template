import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
  }

  logout() {
    sessionStorage.removeItem("test");
    this.cookieService.delete("testing");
    this.router.navigate(['']);
  }


}
