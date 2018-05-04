import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RootComponent } from './root/root.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { LocalStoreService } from './service/local-store.service';
import { StateService } from './service/state.service';
import { HttpStoreService } from './service/http-store.service';
import { FocusOnDirective } from './directive/focus-on.directive';
import { ItemPluralPipe } from './pipe/item-plural.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    RootComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ListComponent,
    ItemComponent,
    FocusOnDirective,
    ItemPluralPipe
  ],
  exports: [
    RootComponent
  ],
  providers: [
    LocalStoreService,
    HttpStoreService,
    StateService
  ]
})
export class TodosModule { }
