
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class Notifications {

  notifications = signal([
    {
      id: 1,
      message: 'Une nouvelle conférence est disponible.'
    },
    {
      id: 2,
      message: 'Sami vous a envoyé une invitation.'
    }
  ]);

  showNotifications = signal(false);

  toggleNotifications() {
    this.showNotifications.update(value => !value);
  }

}
