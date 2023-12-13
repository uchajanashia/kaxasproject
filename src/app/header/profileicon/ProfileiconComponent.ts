import { Component } from '@angular/core';
import { LoginRegistrationService } from 'src/app/login-registration.service';
import { ElementRef, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-profileicon',
  templateUrl: './profileicon.component.html',
  styleUrls: ['./profileicon.component.css'],
})
export class ProfileiconComponent {
  login: boolean = false;

  constructor(
    private loginRegistrationService: LoginRegistrationService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    // Check
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    if (this.loginRegistrationService.isUserLoggedIn()) {
      this.login = true;
    } else {
      this.login = false;
    }
  }
  toggleMenu(): void {
    const menuElement = this.el.nativeElement.querySelector('.menu');

    const isActive = menuElement.classList.contains('active');

    if (isActive) {
      this.renderer.removeClass(menuElement, 'active');
    } else {
      this.renderer.addClass(menuElement, 'active');
    }
  }
  testtoggle() {
    this.login = true;
  }
}
