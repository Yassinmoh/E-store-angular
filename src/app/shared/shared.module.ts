import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { SelectComponent } from './components/select/select.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    LoaderComponent,
    SelectComponent
  ]
})
export class SharedModule { }
