import { SharedModule } from './presentation/pages/shared/shared.module';
import { HomeUserModule } from './presentation/pages/home-users/home-user.module';
import { UserService } from './core/services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './presentation/pages/user-signUp/user.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    UserModule,
    HomeUserModule,
    SharedModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
