import { RouterModule } from '@angular/router';
import { NavBarComponent } from './components/navBar/nav-bar.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [NavBarComponent],
  imports: [RouterModule],
  exports: [NavBarComponent],
})
export class SharedModule {}
