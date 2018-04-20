import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-add-dialog',
    templateUrl: './add-dialog.component.html',
    styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {

    form: FormGroup;
    name: string;

    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<AddDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }


    ngOnInit(): void {
        this.form = this.fb.group({
            name: [name, []]
        });
    }

    ngNoClick(): void {
        this.dialogRef.close();
    }

    close(): void {
        this.dialogRef.close();
    }

    save(): void {
        this.dialogRef.close(this.form.value);
    }

}
