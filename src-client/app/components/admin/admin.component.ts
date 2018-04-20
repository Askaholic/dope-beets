import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

import { Observable } from 'rxjs';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    private password: string;
    userData$: Observable<any>;

    constructor(
        private api: ApiService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    getBids(password: string) {
        this.password = password;
        this.userData$ = this.api.getUsers(password);

        this.userData$.subscribe(
            (data) => {},
            (error) => {
                this.router.navigate(['verboten']);
            }
        );
    }

}
