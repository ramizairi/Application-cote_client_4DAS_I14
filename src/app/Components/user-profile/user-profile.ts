import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  
  user = signal({
    name: 'Rami',
    email: 'Rami@esprit.tn'
  });
  
}
