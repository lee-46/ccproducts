import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CardModel } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class InMemoryApiService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let products: CardModel[] = [
      {
        id: 1,
        Name: 'Visa Signature® Card',
        Description: "Exceptional Visa Signature privileges including Flexible rewards, Travel & Insider access to popular events",
        Availability: 'Y', CreditLimit: 150000, LaunchDate: "12/02/2018",
        APRFrom: 12, APRTo: 24, Type: "Privilege"
      },
      {
        id: 2,
        Name: 'Rewards Master® Credit Card',
        Description: "Cell phone protection helps protect your cell phone from damage or theft",
        Availability: 'N', CreditLimit: 10000, LaunchDate: "01/20/2021",
        APRFrom: 14.99, APRTo: 22.99, Type: "Co-Brand"
      },
      {
        id: 3,
        Name: ' Rewards® Card',
        Description: "Account protection features such as Zero Liability protection for promptly reported unauthorized transactions, card and account activity alerts2, and cell phone protection",
        Availability: 'Y', CreditLimit: 50000, LaunchDate: "09/01/2010",
        APRFrom: 11.89, APRTo: 24, Type: "Rewards"
      },
      {
        id: 4,
        Name: 'Platinum Card',
        Description: "Tools to help you manage spending and create a budget with ease",
        Availability: 'Y', CreditLimit: 100000, LaunchDate: "11/12/1999",
        APRFrom: 18, APRTo: 24, Type: "Platinum"
      }
    ]

    return { products };
  }

}
