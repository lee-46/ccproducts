import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { CardModel } from '../model/product';
import { DatePipe, CurrencyPipe } from "@angular/common";
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';
import { AddEditCardComponent } from '../add-edit-card/add-edit-card.component';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {
  @Input() card: CardModel;
  @Input() index: number;
  @Input() action: string;
  @Output() delete = new EventEmitter<CardModel>();
  @Output() edited = new EventEmitter<boolean>();

  tiles: Tile[];
  datePipe = new DatePipe('en-US');
  currencyPipe = new CurrencyPipe('en-US');

  constructor(private _dialog: MatDialog, public _profileService: ProfileService) {
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.card) {
      if (this.action == "modify") {
        this.tiles = [
          { colspan: 3, rowspan: 1, text: this.card.Description, isImg: false },
          { colspan: 1, rowspan: 1, text: "Availability : " + (this.card.Availability == "Y" ? "Yes" : "No"), isImg: false },
          { colspan: 1, rowspan: 1, text: "Credit Limit : " + this.currencyPipe.transform(this.card.CreditLimit), isImg: false },
          { colspan: 1, rowspan: 1, text: "APR : " + this.card.APRFrom + "% - " + this.card.APRTo + "%", isImg: false },
          { colspan: 1, rowspan: 1, text: "Type : " + this.card.Type, isImg: false },
          { colspan: 1, rowspan: 1, text: "Launch Date : " + this.datePipe.transform(this.card.LaunchDate, 'mediumDate'), isImg: false },
        ]
      }
      else {
        this.tiles = [
          { colspan: 2, rowspan: 1, text: this.card.Description, isImg: false },
          { colspan: 1, rowspan: 1, text: "Availability : " + (this.card.Availability == "Y" ? "Yes" : "No"), isImg: false },
          { colspan: 1, rowspan: 5, text: "", isImg: true },
          { colspan: 1, rowspan: 1, text: "Credit Limit : " + this.currencyPipe.transform(this.card.CreditLimit), isImg: false },
          { colspan: 1, rowspan: 1, text: "APR : " + this.card.APRFrom + "% - " + this.card.APRTo + "%", isImg: false },
          { colspan: 1, rowspan: 1, text: "Type : " + this.card.Type, isImg: false },
          { colspan: 1, rowspan: 1, text: "Launch Date : " + this.datePipe.transform(this.card.LaunchDate, 'mediumDate'), isImg: false },
        ]
      }
    }
  }

  onEdit() {
    const editDialog = this._dialog.open(AddEditCardComponent, {
      data: {
        mode: 'modify',
        card: this.card
      },
      disableClose: true
    });

    editDialog.afterClosed().subscribe(res => {
      if (res)
        this.edited.emit(true);
    });
  }

  onDelete() {
    const deleteDialog = this._dialog.open(DeleteConfirmDialogComponent, {
      data: this.card
    });

    deleteDialog.afterClosed().subscribe((data: CardModel) => {
      if (data) {
        this.delete.emit(data);
      }
    })
  }
}


export interface Tile {
  colspan: number;
  rowspan: number;
  text: string;
  isImg: boolean;
}