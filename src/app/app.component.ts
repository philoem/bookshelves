import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookshelves';

  constructor() {
    var config = {
      apiKey: "AIzaSyB_h0LJtP99_mMdlF2LH6KDfYWcGQ8YijM",
      authDomain: "bookshelves-1a4ef.firebaseapp.com",
      databaseURL: "https://bookshelves-1a4ef.firebaseio.com",
      projectId: "bookshelves-1a4ef",
      storageBucket: "bookshelves-1a4ef.appspot.com",
      messagingSenderId: "648530306414"
    };
    firebase.initializeApp(config);
  }
}
