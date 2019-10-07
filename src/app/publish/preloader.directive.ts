import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Directive, Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { ProgressSpinner } from 'primeng/primeng';

@Directive({
  selector: '[appShowPreloader]'
})
export class PreloaderDirective {
  preloaderFactory: ComponentFactory<ProgressSpinner>;
  preloaderComponent: ComponentRef<ProgressSpinner>;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {
    this.preloaderFactory = this.componentFactoryResolver.resolveComponentFactory(ProgressSpinner);
  }

  @Input()
  set appShowPreloader(loading: boolean) {
    this.viewContainerRef.clear();

    if (loading) {
      this.preloaderComponent = this.viewContainerRef.createComponent(this.preloaderFactory);
      this.preloaderComponent.instance.strokeWidth = '5';
      this.preloaderComponent.instance.style = {
        width: '25px',
        height: '25px'
      };
    } else {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

}
