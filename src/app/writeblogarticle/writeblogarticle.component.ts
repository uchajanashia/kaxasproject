import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-writeblogarticle',
  templateUrl: './writeblogarticle.component.html',
  styleUrls: ['./writeblogarticle.component.css'],
})
export class WriteblogarticleComponent {
  // You can define inputs and outputs for communication with the parent component
  @Input() articleTitle?: string;
  @Input() articleContent?: string;
}
