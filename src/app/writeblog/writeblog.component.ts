import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { WriteblogarticleComponent } from '../writeblogarticle/writeblogarticle.component';

@Component({
  selector: 'app-writeblog',
  templateUrl: './writeblog.component.html',
  styleUrls: ['./writeblog.component.css'],
})
export class WriteblogComponent {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  createdComponentsCount = 2;
  maxComponents = 7;

  createChildComponent() {
    if (this.createdComponentsCount < this.maxComponents) {
      const factory = this.componentFactoryResolver.resolveComponentFactory(
        WriteblogarticleComponent
      );
      const componentRef = this.container.createComponent(factory);
      componentRef.instance.articleTitle =
        'satauri' + this.createdComponentsCount;
      componentRef.instance.articleContent =
        'text' + this.createdComponentsCount;
      // Customize properties of the created component if needed
      // For example: componentRef.instance.articleTitle = 'Title';
      //              componentRef.instance.articleContent = 'Content';

      this.createdComponentsCount++;
    }
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
}
