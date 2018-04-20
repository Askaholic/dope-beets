import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpJsonOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    });
}

@Injectable()
export class ApiService {
    apiUrl: string = 'http://localhost:8337/api';

    constructor(private http: HttpClient) { }

    getUser(iz: string) {
        return this.http.get(this.apiUrl + '/users/' + iz);
    }

    makeBid(iz:string, name: string, amount: number) {
        return this.http.post(this.apiUrl + '/users/' + iz + '/bid', {vegetable: name, amount} ,httpJsonOptions);
    }

    getVegetables() {
        return this.http.get(this.apiUrl + '/vegetables/all');
    }
}
