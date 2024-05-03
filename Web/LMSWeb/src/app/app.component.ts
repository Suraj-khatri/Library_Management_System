import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LMSWeb';



  // @HostListener('window:beforeunload', ['$event'])
  // beforeUnloadHandler(event: Event) {
  //   // Remove data from local storage when the browser is closed
  //   localStorage.removeItem('userPersonId');
  //   localStorage.removeItem('userId');
  //   localStorage.removeItem('userType');
  //   localStorage.removeItem('user');
  //   localStorage.clear();
  // }


}
