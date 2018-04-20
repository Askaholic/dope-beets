import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { Observable } from 'rxjs';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    private password: string;

    userData$: Observable<any>;
    vegData$: Observable<any>;

    sortedData$: Observable<any>;


    constructor(
        private api: ApiService,
        private router: Router,
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer
    ) {
        iconRegistry.addSvgIcon(
            'account',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/account.svg'));
    }

    ngOnInit() {
    }

    getBids(password: string) {
        this.password = password;
        this.userData$ = this.api.getUsers(password);

        this.userData$.subscribe(
            (data) => {
                this.vegData$ = this.api.getVegetables();

                sortedData$ = Observable.of({});
                
            },
            (error) => {
                this.router.navigate(['verboten']);
            }
        );
    }

}
