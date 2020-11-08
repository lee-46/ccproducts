import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CardModel } from '../model/product';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class AppService {
  private BASE_URL: string = "api/products";
  constructor(private _http: HttpClient) { }

  getProducts(): Observable<CardModel[]> {
    return this._http.get<CardModel[]>(this.BASE_URL);
  }

  addCard(card: CardModel) {
    return this._http.post(this.BASE_URL, card).pipe(
      catchError(this.handleError)
    );
  }

  deleteCard(id: number): Observable<CardModel> {
    const url = `${this.BASE_URL}/${id}`;
    return this._http.delete<CardModel>(url, cudOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateCard(card: CardModel) {
    const url = `${this.BASE_URL}/${card.id}`;
    return this._http.put(url, card).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  //   public getPolicy(policyId){
  //     return this.httpClient.get(`${this.SERVER_URL + 'policies'}/${policyId}`); 
  // }
  // public createPolicy(policy: {id: number, amount: number, clientId: number, userId: number, description: string}){
  //    return this.httpClient.post(`${this.SERVER_URL + 'policies'}`, policy)
  // }

  // public deletePolicy(policyId){
  //    return this.httpClient.delete(`${this.SERVER_URL + 'policies'}/${policyId}`)
  // }
  // public updatePolicy(policy: {id: number, amount: number, clientId: number, userId: number, description: string}){
  //    return this.httpClient.put(`${this.SERVER_URL + 'policies'}/${policy.id}`, policy)
  // }

  // public createPolicy(policy){
  //   this.policyService.createPolicy(policy).subscribe((ret)=>{
  //         console.log("Policy created: ", ret);
  //   });
  // }
  // public deletePolicy(policyId){
  //   this.policyService.deletePolicy(policyId).subscribe((ret)=>{
  //         console.log("Policy deleted: ", ret);
  //   })
  // }


  // public updatePolicy(policy: {id: number, amount: number, clientId: number, userId: number, description: string}){
  //   let newPolicy:{id: number, amount: number, clientId: number, userId: number, description: string} = {policy.id, 0, 0, 0};
  //   this.policyService.updatePolicy(policyId).subscribe((ret)=>{
  //         console.log("Policy updated: ", ret);
  //   });
  // }  
}
