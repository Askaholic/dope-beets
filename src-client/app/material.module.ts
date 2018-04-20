import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [
      MatCardModule,
      MatInputModule,
      MatFormFieldModule,
      MatToolbarModule,
      MatIconModule,
      MatGridListModule,
      MatButtonModule,
      MatProgressBarModule
  ],
  exports: [
      MatCardModule,
      MatInputModule,
      MatFormFieldModule,
      MatToolbarModule,
      MatIconModule,
      MatGridListModule,
      MatButtonModule,
      MatProgressBarModule
  ]
})
export class MaterialModule { }
