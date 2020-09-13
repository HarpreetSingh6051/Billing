import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormBuilder, FormGroup, Validators, FormsModule, } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkColumnDef } from '@angular/cdk/table';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatDividerModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatSelectModule,
    MatExpansionModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatTreeModule,

  ],
  providers: [CdkColumnDef],
  exports: [
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatChipsModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatDividerModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatExpansionModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatTreeModule,
  ]
})

export class SharedModule { }
