import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
    apiUrl: string = 'http://localhost:8337/api';

    constructor(private http: HttpClient) { }

    getUser(iz: string) {
        return this.http.get(this.apiUrl + '/users/' + iz);
    }
}
