import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './/layout.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LayoutComponent],
  declarations: [LayoutComponent, SidemenuComponent, TopmenuComponent],
})
export class LayoutModule { }
