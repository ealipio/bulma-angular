import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';

@NgModule({
  declarations: [CustomersComponent],
  imports: [CommonModule, RouterModule, FormsModule]
})
export class CustomersModule {}
