import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatDialog } from '@angular/material';

import { Observable } from 'rxjs';

import { AddDialogComponent } from './add-dialog/add-dialog.component';

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
        private sanitizer: DomSanitizer,
        private dialog: MatDialog
    ) {
        iconRegistry.addSvgIcon(
            'account',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/account.svg'));
    }

    ngOnInit() {
    }

    get(o, name: string) {
        if (!o) return;
        return o[name];
    }

    getBids(password: string) {
        this.password = password;
        this.userData$ = this.api.getUsers(password);

        this.userData$.subscribe(
            (data) => {
                this.vegData$ = this.api.getVegetables();
                var sorted = {};

                data.users.map((user) => {
                    user.bids.map((bid) => {
                        if (!sorted[bid.item]) {
                            sorted[bid.item] = [];
                        }

                        sorted[bid.item].push({iz: user.iz, amount: bid.amount});
                    });
                });
                for (let key of Object.keys(sorted)) {
                    sorted[key].sort((a, b) => {
                        return b.amount - a.amount;
                    });
                }
                this.sortedData$ = Observable.of(sorted);
            },
            (error) => {
                this.router.navigate(['verboten']);
            }
        );
    }

    openAddDialog() {
        let ref = this.dialog.open(AddDialogComponent, {
            width: '20rem',
            data: {
                name: "test"
            }
        });

        ref.afterClosed().subscribe(
            (data) => {
                console.log(data);
                let newVeg = this.api.makeVegetable(this.password, data.name);
                newVeg.subscribe(
                    (data) => {
                        this.vegData$ = this.api.getVegetables();
                    },
                    (error) => {
                        console.log(error);
                    }
                )
            }
        )
    }
}
