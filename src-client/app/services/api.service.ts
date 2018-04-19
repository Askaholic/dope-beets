import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable()
export class ApiService {
    apiUrl: string = 'http://localhost:8337/api';

    constructor(private http: HttpClient) { }

    getUser(iz: string) {
        return this.http.get<User>(this.apiUrl + '/users/' + iz);
    }
}
