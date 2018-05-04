import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { RootComponent } from './root/root.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { LocalStoreService } from './service/local-store.service';
import { StateService } from './service/state.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
  ],
  providers: [
    LocalStoreService,
    StateService
  ]
})
export class TodosModule { }
