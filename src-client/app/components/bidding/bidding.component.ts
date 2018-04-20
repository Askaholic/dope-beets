import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { ApiService } from '../../services/api.service';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.css']
})
export class BiddingComponent implements OnInit {

    userData$: Observable<any>;
    userData: any;
    vegData$: Observable<any>;

    constructor(
        private api: ApiService,
        private router: Router,
        private route: ActivatedRoute,
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer
    ) {
        iconRegistry.addSvgIcon(
            'account',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/account.svg'));
    }

    ngOnInit() {
        this.userData$ = this.route.paramMap.switchMap((params: ParamMap) => {
            return this.api.getUser(params.get('iz'));
        });
        this.vegData$ = this.api.getVegetables();

        this.userData$.subscribe((data)=> {
            this.userData = data;
        },
        (error) => {
            console.log('Error: ', error);
            this.router.navigate(['login']);
        });
    }

    submitBid(vegName: string, amount: string) {
        console.log(vegName, amount);
        this.api.makeBid(this.userData.user.iz, vegName, amount).subscribe(
            (data) => {
                this.userData$ = Observable.of(data);
            },
            (error) => {
                console.log(error);
                this.router.navigate(['verboten']);
            }
        );
    }

    deleteBid(bid: number) {
        this.api.deleteBid(this.userData.user.iz, bid).subscribe(
            (data) => {
                this.userData$ = Observable.of(data);
            },
            (error) => {
                console.log(error);
                this.router.navigate(['verboten']);
            }
        );
    }
}
