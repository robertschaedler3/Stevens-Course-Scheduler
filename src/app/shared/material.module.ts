import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
