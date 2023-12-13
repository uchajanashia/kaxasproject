import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ProfileiconComponent } from './header/profileicon/ProfileiconComponent';
import { ProfilepageComponent } from './profilepage/profilepage.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'profile', component: ProfilepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
