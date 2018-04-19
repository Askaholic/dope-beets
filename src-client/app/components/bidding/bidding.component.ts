import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { User } from '../../models/user.model';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.css']
})
export class BiddingComponent implements OnInit {

    user$: Observable<User>;

    constructor(
        private api: ApiService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

  ngOnInit() {
      this.user$ = this.route.paramMap.switchMap((params: ParamMap) => {
          return this.api.getUser(params.get('iz'));
      })
  }

}
