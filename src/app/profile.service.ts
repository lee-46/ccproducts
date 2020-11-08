import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  isLogged: boolean = false;
  isAdmin: boolean = false;
  constructor() { }
}
