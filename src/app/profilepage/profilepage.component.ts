import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent {
  constructor(private toast :ToastrService){}
  error(){
    this.toast.error('vaimededa','dagverxe')
  }

}
