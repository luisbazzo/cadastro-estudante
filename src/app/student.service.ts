import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = "http://localhost:3000/students";

  constructor(private http : HttpClient) { }

  getStudents() : Observable<student[]>{
    return this.http.get<student[]>(this.url);
  }

  save(student : student) : Observable<student>{
    return this.http.post<student>(this.url, student);
  }
}
