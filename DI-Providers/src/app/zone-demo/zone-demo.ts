import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-zone-demo',
  imports: [],
  templateUrl: './zone-demo.html',
  styleUrl: './zone-demo.css'
})
export class ZoneDemo {
    status = 'Waiting...';

  constructor(private ngZone: NgZone) {}
        runInsideZone() {
    this.status = 'Inside zone started...';
    this.ngZone.run(() => {
      setTimeout(() => {
        this.status = '✅ Inside zone done – UI updated';
      }, 2000);
    });
  }

  runOutsideZone() {
    this.status = 'Outside zone started...';
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.status = '❌ Outside zone done – UI NOT updated';

        // To make Angular detect it:
        this.ngZone.run(() => {
          this.status = '✅ Manually entered zone – UI updated';
        });
      }, 2000);
    });
  }
}