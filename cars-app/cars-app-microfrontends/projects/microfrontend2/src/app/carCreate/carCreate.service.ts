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
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ikc0dFBxYlBFOE5zaXdoWXhzc3YzaCJ9.eyJpc3MiOiJodHRwczovL2Rldi1kcnlubmtoMWdkNTJrd3g4LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJoVlNManlOem04MjZ5ZW00ZnVVdndkcDh1aTBmTG5wVkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9jYXJzLWFwcCIsImlhdCI6MTcwNzI0OTI1MCwiZXhwIjoxNzA3MzM1NjUwLCJhenAiOiJoVlNManlOem04MjZ5ZW00ZnVVdndkcDh1aTBmTG5wViIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.Qfhe_5c7c6LRirBOkH3I3iSG34LOanqkeqWHywL2E7MMJW-IawL5VVZnn6uB0hiGXr4McAZ0HCbLvgra1iJiH5sF9vHsBgU8roEkfsZAACSohB1i-3LGil5GqNzJ0NoUZFoARZ7-V9TE-Ps2D-qd3MxqwWZMm4Im_ghox2xzX4hJ8cbEvIcHR1nkSx3ud5E7pZFMy7ELGswIx8gMzaRqQA87lkiuX4q047oUZd1PtLlXlIDVrXkbmvyQ-i-grk-ieODTs6ZK-EcrCS_XqCFyBVo-b9Vps8LZ4yL7DKu_rjQPUvd1zsHx_NblZfTc8KnPHi3bhXHxT35dpkrGNCSwiw' })
  };

  constructor(private http: HttpClient) {}

  createCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, car, this.httpOptions);
  }
}
