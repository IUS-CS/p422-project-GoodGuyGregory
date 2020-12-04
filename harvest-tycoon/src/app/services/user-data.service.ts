import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private http: HttpClient
  ) { }

  private communityUrl = '/v1/community';

  private userUrl = '/v1/user'

  public getUsers(): Observable<User[]> {
    // returns an array of Users
    return this.http.get<User[]>(this.communityUrl);
  }

  public getUser(name: string): Observable<User> {
    // return a single user
    return this.http.get<User>(`${this.userUrl}/${name}`);
  }
}
