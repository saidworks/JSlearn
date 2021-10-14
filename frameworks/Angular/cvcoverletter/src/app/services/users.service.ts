import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { User } from '../models/user/user';
@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private baseUrl = 'http://127.0.0.1:5000/form';
  private headersOptions = { headers :new HttpHeaders({ 'Content-Type': 'application/json',
                                                        "Access-Control-Allow-Origin": "*"
                                                       }
                                                       )};

  constructor(private http:HttpClient) {}

  sendForm(user: User):Observable<any>{
    //const data=JSON.stringify(user);
    //console.log(data);
    return this.http.post<User[]>(this.baseUrl,user
      , this.headersOptions
    );
  }
}
