import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  child: ChildList[] = [
    { navlink: ["/products", 'view'], displayName: "View All Products", display: this._profileService.isLogged },
    { navlink: ["/products", 'modify'], displayName: "Add/Modify Products", display: this._profileService.isLogged && this._profileService.isAdmin }
  ];
  constructor(private _router: Router, private _profileService: ProfileService) { }

  ngOnInit(): void {
  }

  onSectionSelection(child: ChildList) {
    this._router.navigate([child.navlink]);
  }


}

export interface ChildList {
  navlink: string[];
  displayName: string;
  display: boolean;
} 