import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpJsonOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable()
export class ApiService {
    apiUrl: string = 'http://localhost:8337/api';

    constructor(private http: HttpClient) { }

    getUser(iz: string) {
        return this.http.get(this.apiUrl + '/users/' + iz);
    }

    getUsers(password: string) {
        return this.http.post(this.apiUrl + '/users/all', {password}, httpJsonOptions);
    }

    makeBid(iz:string, name: string, amount: string) {
        return this.http.post(this.apiUrl + '/users/' + iz + '/bid', {vegetable: name, amount}, httpJsonOptions);
    }

    deleteBid(iz: string, bid: number) {
        return this.http.post(this.apiUrl + '/users/' + iz + '/delbid', {bid: bid}, httpJsonOptions);
    }

    getVegetables() {
        return this.http.get(this.apiUrl + '/vegetables/all');
    }

    makeVegetable(password: string, name: string) {
        return this.http.put(this.apiUrl + '/vegetables/make', {password, name}, httpJsonOptions);
    }
}
