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

    constructor(
        private api: ApiService,
        private router: Router,
        private route: ActivatedRoute,
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer
    ) {

    iconRegistry.addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    }

    ngOnInit() {
        this.userData$ = this.route.paramMap.switchMap((params: ParamMap) => {
          return this.api.getUser(params.get('iz'));
        })

        this.userData$.subscribe((data)=> {
          console.log(data);
        },
        (error) => {
            console.log('Error: ', error);
        });
    }
}
