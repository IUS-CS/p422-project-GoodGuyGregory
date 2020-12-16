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

  private userUrl = '/v1/users';

  public getUsers(): Observable<User[]> {
    // returns an array of Users
    return this.http.get<User[]>(this.communityUrl);
  }

  public getOtherUsers(username: string): Observable<User[]> {
    // return a single user
    return this.http.get<User[]>(`${this.communityUrl}/${username}`);
  }

  public createUser(userToCreate: User): Observable<any> {

    return this.http.post<User>(`${this.userUrl}/${userToCreate.username}`, userToCreate);
  }
}
