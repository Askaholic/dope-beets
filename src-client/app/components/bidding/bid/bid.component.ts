import { Component, OnInit, Input } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
    selector: 'app-bid',
    templateUrl: './bid.component.html',
    styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {
    @Input() bid;

    constructor(
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer
    ) {
        iconRegistry.addSvgIcon(
            'close',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/ic_close_black_24px.svg'));
    }

    ngOnInit() {
    }

}
