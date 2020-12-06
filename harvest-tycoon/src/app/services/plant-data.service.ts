import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Models:


@Injectable({
  providedIn: 'root'
})
export class PlantDataService {

  constructor(
    private http: HttpClient
  ) { }

  private plantUrl = '/v1/plants';

  public getUserPlants(): Observable<Plant[]>

}
