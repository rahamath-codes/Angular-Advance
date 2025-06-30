import { Injectable } from '@angular/core';
//! @Injectable()
// Decorator to make a class injectable by Angular DI system
@Injectable({ 
  providedIn: 'root'
})
export class Data {
    getData() {
    return 'Data from service';
  }
//!  NgModule
// An NgModule is a fundamental building block of an Angular application.
// It acts as a container to group related components, directives, pipes, and services.
// It helps organize the app into cohesive blocks of functionality.

}
