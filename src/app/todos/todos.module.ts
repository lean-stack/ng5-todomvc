import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RootComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ListComponent,
    ItemComponent
  ],
  exports: [
    RootComponent
  ]
})
export class TodosModule { }
