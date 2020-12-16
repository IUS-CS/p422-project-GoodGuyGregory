import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageDataService {

  constructor(
    private http: HttpClient
  ) { }

  private messageUrl = '/v1/messages';

  // Returns an array of messages for a user profile
  public getUserMessages(username: string): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.messageUrl}/${username}`);
  }

  //  Posts new message to the user's inbox
  public createNewMessage(username: string, messageToAdd: Message): Observable<any> {
    return this.http.post<Message>(`${this.messageUrl}/${username}`, messageToAdd);
  }
}
