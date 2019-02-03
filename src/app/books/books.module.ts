import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BooksComponent } from './books.component';

@NgModule({
  declarations: [BooksComponent],
  imports: [CommonModule, FormsModule, RouterModule]
})
export class BooksModule {}
