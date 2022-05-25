import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarsComponent } from './sidebars/sidebars.component';

@NgModule({
  declarations: [BreadcrumbsComponent, HeaderComponent, SidebarsComponent],
  imports: [CommonModule],
  exports: [BreadcrumbsComponent, HeaderComponent, SidebarsComponent],
})
export class SharedModule {}
