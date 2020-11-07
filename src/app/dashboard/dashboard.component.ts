import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  child: ChildList[] = [
    { navlink: "/products", displayName: "Products" }
  ];
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onSectionSelection(child: ChildList) {
    this._router.navigate([child.navlink]);
  }


}

export interface ChildList {
  navlink: string;
  displayName: string;
} 