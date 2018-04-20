import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-bid',
    templateUrl: './bid.component.html',
    styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {
    @Input() bid;
    @Output() del = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

}
