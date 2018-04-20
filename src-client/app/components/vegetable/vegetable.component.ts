import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-vegetable',
    templateUrl: './vegetable.component.html',
    styleUrls: ['./vegetable.component.css']
})
export class VegetableComponent implements OnInit {
    @Input() veg;

    constructor() { }

    ngOnInit() {
    }

}
