import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Car } from "../car";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CarCreateService {
  private apiUrl = 'http://localhost:8000/api/cars';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ikc0dFBxYlBFOE5zaXdoWXhzc3YzaCJ9.eyJpc3MiOiJodHRwczovL2Rldi1kcnlubmtoMWdkNTJrd3g4LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJoVlNManlOem04MjZ5ZW00ZnVVdndkcDh1aTBmTG5wVkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9jYXJzLWFwcCIsImlhdCI6MTcwNzM5NjA4NSwiZXhwIjoxNzA3NDgyNDg1LCJhenAiOiJoVlNManlOem04MjZ5ZW00ZnVVdndkcDh1aTBmTG5wViIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.dydsfiyCzqD7Xsr9C9qhA4hm8wIgN3puF-UH3Io1dp1BUt4iWT9rG-VjK310-LJoVT9bUoWSdyIpfCgpzf949OWEnNxh0a_pKttC2pjSBJRgVGsWLxwSiBuLdsXKimKaVGM_Tnh8pTLVuj0rbxdqxv78YB48ftXJXy5LihswPSUkRvEedgfkG3C5A2-XFZQAVcZxCJn6lSoLmCUv3qoEMoULQWJWxzFTk0u9ew8pxd2JZdBm_XMODKUVGR2u0ivxYs18BecWxGFAiDKUULTTXIHT7Y4gnwseiOWJNikKnDZyguPFoD6UqZYoBlQlB2J2UcisocFxLq0shtbjUZf67Q' })
  };

  constructor(private http: HttpClient) {}

  createCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, car, this.httpOptions);
  }
}
