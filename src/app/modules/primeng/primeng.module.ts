import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MegaMenuModule } from 'primeng/megamenu';
import { TableModule } from 'primeng/table';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MegaMenuModule,
    TableModule,
    ChipModule,
    ButtonModule
  ],
  exports: [
    MegaMenuModule,
    TableModule,
    ChipModule,
    ButtonModule
  ]
})
export class PrimengModule { }
