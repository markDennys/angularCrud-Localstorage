import { HomeComponent } from './home.component';
import { FormCadastroModule } from './form-cadastro/form-cadastro.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, FormCadastroModule],
  exports: [HomeComponent]
})
export class HomeModule {}
