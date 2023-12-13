import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPagePostComponent } from './main-page-post/main-page-post.component';
import { MainPageTopPostComponent } from './main-page-top-post/main-page-top-post.component';
import { PostCardComponent } from './post-card/post-card.component';
import { LogoComponent } from './header/logo/logo.component';
import { ProfileiconComponent } from './header/profileicon/ProfileiconComponent';
import { NavigationComponent } from './header/navigation/navigation.component';
import { FooterNavigationComponent } from './footer/footer-navigation/footer-navigation.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilepageComponent } from './profilepage/profilepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPagePostComponent,
    MainPageTopPostComponent,
    PostCardComponent,
    LogoComponent,
    ProfileiconComponent,
    NavigationComponent,
    FooterNavigationComponent,
    MainPageComponent,
    LoginpageComponent,
    ProfilepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
