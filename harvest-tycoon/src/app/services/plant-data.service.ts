import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plant } from '../models/plant';

// Models:

@Injectable({
  providedIn: 'root'
})
export class PlantDataService {

  constructor(
    private http: HttpClient
  ) { }

  private plantUrl = '/v1/garden';

  // Returns an array of plants for a user profile
  public getUserPlants(username: string): Observable<Plant[]> {
    return this.http.get<Plant[]>(`${this.plantUrl}/${username}`);
  }

  //  Posts new plants to the user's garden
  public createNewPlant(username: string, plantToAdd: Plant): Observable<any> {
    return this.http.post<Plant>(`${this.plantUrl}/${username}`, plantToAdd);
  }

}
