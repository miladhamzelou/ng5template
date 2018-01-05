import { Component, OnInit } from '@angular/core';
import { HomeService } from "../../services/home.service";
import { ActivatedRoute, Router } from "@angular/router/public_api";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  goals: any;

  
  // constructor(private route: ActivatedRoute, private router: Router, private _data: HomeService) { 
  //   this.route.params.subscribe(res => console.log(res.id));
  // }

  // ngOnInit() {
  //   this._data.goal.subscribe(res => this.goals = res);
  // }

  // sendMeHome() {
  //   this.router.navigate(['']);
  // }


}
