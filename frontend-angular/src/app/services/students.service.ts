import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Paiement} from "../models/students.models";
import {Student} from "../models/students.models";


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) {
  }

  public getAllPaiement(): Observable<Array<Paiement>> {
    return this.http.get<Array<Paiement>>(`${environment.backendHost}/paiements` );
  }

  public getStudent(): Observable<Array<Student>> {
    return this.http.get<Array<Student>>(`${environment.backendHost}/students` );
  }


}

