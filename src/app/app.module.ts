import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

///----MATERIAL COMPONETS----///
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatNativeDateModule } from "@angular/material/core";
///----MATERIAL COMPONETS----///

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { InMemoryApiService } from './services/in-memory-api.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './services/app.service';
import { AddEditCardComponent } from './add-edit-card/add-edit-card.component';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';
import { ProfileService } from './profile.service';
import { AuthGuard } from './auth.guard';

let MatModules = [
  MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule,
  MatIconModule, MatInputModule, MatSelectModule, MatSnackBarModule, MatListModule, MatGridListModule,
  MatNativeDateModule
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductsComponent,
    CreditcardComponent,
    AddEditCardComponent,
    DeleteConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModules,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryApiService),
    HttpClientModule
  ],
  providers: [AppService, ProfileService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
