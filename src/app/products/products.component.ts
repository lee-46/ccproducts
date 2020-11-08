import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AddEditCardComponent } from '../add-edit-card/add-edit-card.component';
import { CardModel } from '../model/product';
import { ProfileService } from '../profile.service';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: CardModel[];
  action: string;
  constructor(private _appService: AppService, private _activedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar, private _dialog: MatDialog, public _profileService: ProfileService) { }

  ngOnInit(): void {
    this.getProducts();
    this._activedRoute.params.subscribe(params => {
      this.action = params?.action ? params?.action : "view";
    })
  }

  getProducts() {
    this._appService.getProducts().subscribe((res: CardModel[]) => {
      if (res) {
        this.products = res.reverse();
      }
    });
  }

  deleteCard(data: CardModel) {
    this._appService.deleteCard(data.id).subscribe(res => {
      this.getProducts();
      this._snackBar.open("Deleted Successfully!!", '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000
      });
    })
  }

  onCardEdit(event) {
    if (event) {
      this._snackBar.open("Edited product Successfully!!", '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000
      });
    }
    this.getProducts();
  }

  addCard() {
    const addCardDialog = this._dialog.open(AddEditCardComponent, {
      data: { mode: 'add' },
      disableClose: true
    });

    addCardDialog.afterClosed().subscribe(res => {
      if (res) {
        this._snackBar.open("Added new product Successfully!!", '', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 3000
        });
      }
      this.getProducts();
    });
  }

}
