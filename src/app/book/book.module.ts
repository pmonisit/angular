import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookRoutingModule } from './book-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatButtonModule
  ]
})
export class BookModule { }
