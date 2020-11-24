import { HomeModule } from './presentation/pages/home/home.module';
import { CommonModule } from '@angular/common';
import { UserService } from './core/services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    NgbModule,
    HomeModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
