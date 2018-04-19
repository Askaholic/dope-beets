import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
      MatCardModule,
      MatInputModule,
      MatFormFieldModule,
      MatToolbarModule,
      MatIconModule
  ],
  exports: [
      MatCardModule,
      MatInputModule,
      MatFormFieldModule,
      MatToolbarModule,
      MatIconModule
  ]
})
export class MaterialModule { }
