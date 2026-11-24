
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './Components/header/header';
import { Navbar } from './Components/navbar/navbar';
import { UserProfile } from './Components/user-profile/user-profile';
import { FriendsList } from './Components/friends-list/friends-list';
import { Notifications } from './Components/notifications/notifications';
import { Footer } from './Components/footer/footer';
import { ConferenceList } from './Components/conference-list/conference-list';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Navbar,
    UserProfile,
    FriendsList,
    Notifications,
    ConferenceList,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Gestion des conférences');
}
