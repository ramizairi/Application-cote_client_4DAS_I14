import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends-list',
  imports: [FormsModule],
  templateUrl: './friends-list.html',
  styleUrl: './friends-list.css',
})
export class FriendsList {

  friends = signal([
    { name: 'Sami' , email:'Sami@esprit.tn' },
    { name: 'Youssef' , email:'Youssef@esprit.tn' },
    { name: 'Amine' , email:'Amine@esprit.tn'   }
  ]);

}
