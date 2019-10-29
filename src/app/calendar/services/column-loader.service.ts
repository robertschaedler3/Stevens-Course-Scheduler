import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ReflectiveInjector,
  ContentChild
} from '@angular/core'

import { DayColumnComponent } from '../day-column/day-column.component';

@Injectable({
  providedIn: 'root'
})
export class ColumnLoaderService {

  factoryResolver: any;
  rootViewContainer: any;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver;
  }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addDynamicComponent() {
    const factory = this.factoryResolver
      .resolveComponentFactory(DayColumnComponent)
    const component = factory
      .create(this.rootViewContainer.parentInjector);
    // component.setDay(day);
    this.rootViewContainer.insert(component.hostView)
    return component;
  }

}
