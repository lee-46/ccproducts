import { Component, Inject, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CardModel } from '../model/product';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-add-edit-card',
  templateUrl: './add-edit-card.component.html',
  styleUrls: ['./add-edit-card.component.css']
})
export class AddEditCardComponent implements OnInit {
  mode: string;
  cardModel: CardModel;
  cardGroup: FormGroup;
  title: string;
  submitted = false;

  get f() { return this.cardGroup.controls; }

  constructor(private _fb: FormBuilder, public dialogRef: MatDialogRef<AddEditCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _appService: AppService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    let newCard = new CardModel();
    Object.assign(newCard, this.data.card);
    this.buildForm(newCard);
    if (this.data?.mode == 'modify') {
      this.title = "Edit Card Details";
      this.mode = 'modify';
    }
    else {
      this.title = "Add Card Details";
      this.mode = 'add';
    }
  }

  buildForm(card: CardModel) {
    var LaunchDate = (card.LaunchDate) ? new Date(card.LaunchDate) : "";
    this.cardGroup = this._fb.group({
      Name: [card.Name, Validators.required],
      Type: [card.Type, Validators.required],
      APRFrom: [card.APRFrom, Validators.required],
      APRTo: [card.APRTo, Validators.required],
      Description: [card.Description, Validators.required],
      CreditLimit: [card.CreditLimit, Validators.required],
      LaunchDate: [LaunchDate, Validators.required],
      Availability: [card.Availability, Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.cardGroup.invalid) {
      return;
    }

    this.cardModel = new CardModel();
    Object.assign(this.cardModel, this.cardGroup.value);
    this.cardModel.LaunchDate = new Date(this.cardModel.LaunchDate).toLocaleDateString();

    if (this.mode == 'add') {
      this._appService.addCard(this.cardModel).subscribe(res => {
        this.dialogRef.close(true);
      });
    }
    else if (this.mode == 'modify') {
      this.cardModel.id = this.data.card.id;
      this._appService.updateCard(this.cardModel).subscribe(res => {
        this.dialogRef.close(true);
      });
    }
  }

  onReset() {
    this.submitted = false;
    this.cardGroup.reset();
    Object.keys(this.cardGroup.controls).forEach((name) => {
      var control = this.cardGroup.controls[name];
      control.markAsPristine();
      control.markAsUntouched();
      control.reset();
      control.setErrors(null);
    });
    this.cardGroup.setErrors({ 'invalid': true });
  }

  close() {
    this.dialogRef.close();
  }
}
