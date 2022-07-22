import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Injectable means this service can be injected into other components or services in application
@Injectable({
  providedIn: 'root' //Services are singleton. Data doesn't get destroyed until application shuts down.Components are shut down when they are not in use.
})
export class AccountService {

  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  login(model: any){
    return this.http.post(this.baseUrl + 'account/login', model);
  }
}
