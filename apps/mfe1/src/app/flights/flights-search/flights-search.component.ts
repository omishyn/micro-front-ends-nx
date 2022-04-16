import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';


@Component({
  selector: 'micro-front-ends-nx-app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {

  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef | undefined;

  constructor(
    @Inject(Injector) private injector: Injector,
    @Inject(ComponentFactoryResolver) private cfr: ComponentFactoryResolver) { }

  search() {
    alert('Not implemented for this demo!');
  }

  terms() {
    import('../lazy/lazy.component')
      .then(m => m.LazyComponent)
      .then(comp => {
        const factory = this.cfr.resolveComponentFactory(comp);
        this.viewContainer?.createComponent(factory, 0, this.injector);
      });

  }


}
