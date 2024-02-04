import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Car } from "../car";

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private apiUrl = 'http://localhost:8000/api/cars';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ikc0dFBxYlBFOE5zaXdoWXhzc3YzaCJ9.eyJpc3MiOiJodHRwczovL2Rldi1kcnlubmtoMWdkNTJrd3g4LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJlM1BIWGZkblAxNzNTaHBtNkJlMVhzU0ZIN3lOWGxzN0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9tb3ZpZXMtYXBwIiwiaWF0IjoxNzA2OTk0NTE0LCJleHAiOjE3MDcwODA5MTQsImF6cCI6ImUzUEhYZmRuUDE3M1NocG02QmUxWHNTRkg3eU5YbHM3IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.n4qKpjDNRyFNjGdm7ogMEGn4qPF0qVLU9LSjSnqe9K-UvnekqLchNk1IJHxXMpBnC7sZm5hLvsp7KQzCA0nGNoNSy6F1ifsuqNdIe4UQOSB_UcwPCJg8QGnaazSRqG1fLswsIPv1C6bGiKr-EuflaWHnnOkN8Svty-BK5xb_FIQLrWNlkEusli6TUmiNugKmdIdphoFMLwiVUBxMFD2HFx0bPE56A82RInuleAw8nPqHU1z-zDtBnfkjKAFzx39crw74VqsQdCn7MoivgkMuQ41VN-lQ3tWt-lVjNWJIYHTNwX8YtNmaGllWdAapBjUgLrCe0a_Jv3cZybhmLurMTQ' })
  };

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  deleteCar(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
