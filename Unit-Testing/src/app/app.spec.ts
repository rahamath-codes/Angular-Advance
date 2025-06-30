import { TestBed } from '@angular/core/testing';
import { App } from './app';
//! Unit Testing - Unit testing is the process of testing small, isolated pieces of code (units like:
// Components, Services, Pipes, Functions.
//?Jasmine - A testing framework to write and run unit tests (provides describe, it, expect, etc.)
// describe() – A group of related tests (test suite)
// it() – An individual test case
// expect() – Used to write the expected result
// toBe() – A matcher that checks if two values are equal
//?Karma - 	A test runner that launches a browser, runs the Jasmine tests, and shows results.
// Angular CLI automatically configures Karma for your project when you create an Angular app.
// When you run: ng test
// describe('Calculator', () => {
//   it('should add numbers correctly', () => {
//     const result = 2 + 3;
//     expect(result).toBe(5);
//   });
// });
describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Unit-Testing');
  });
});
