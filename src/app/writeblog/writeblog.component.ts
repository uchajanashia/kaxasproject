import { Component } from '@angular/core';
import { LoginRegistrationService } from '../login-registration.service';
@Component({
  selector: 'app-writeblog',
  templateUrl: './writeblog.component.html',
  styleUrls: ['./writeblog.component.css'],
})
export class WriteblogComponent {
  selectedFile!: File;
  imageUrl: string | ArrayBuffer | null = null;

  constructor(private loginRegistrationService: LoginRegistrationService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.readAndDisplayImage();
  }

  private readAndDisplayImage() {
    if (this.selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imageUrl = e.target?.result || null;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  countChildComponent = 0;
  createChildComponent() {
    this.countChildComponent++;
  }

  maintext: string = '';
  mainhead: string = '';

  text: string = '';
  text1: string = '';
  text2: string = '';
  text3: string = '';
  text4: string = '';

  head: string = '';
  head1: string = '';
  head2: string = '';
  head3: string = '';
  head4: string = '';

  submit() {
    console.log(this.maintext);
    console.log(this.text);
    console.log(this.text1);
    console.log(this.text2);
    console.log(this.text3);
    console.log(this.text4);

    console.log(this.mainhead);
    console.log(this.head);
    console.log(this.head1);
    console.log(this.head2);
    console.log(this.head3);
    console.log(this.head4);
    this.loginRegistrationService
      .pushblog(
        this.mainhead,
        this.head,
        this.head1,
        this.head2,
        this.head3,
        this.head4,
        this.maintext,
        this.text,
        this.text1,
        this.text2,
        this.text3,
        this.text4,
        this.selectedFile
      )
      .subscribe(
        (response) => {
          console.log('aitvirta:', response);
        },
        (error) => {
          console.error('Error :', error);
        }
      );
  }
}
