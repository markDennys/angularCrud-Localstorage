import { ListModule } from './../list/list.module';
import { FormCadastroComponent } from './form-cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormCadastroComponent],
  imports: [CommonModule, FormsModule, ListModule],
  exports: [FormCadastroComponent]
})
export class FormCadastroModule {}
