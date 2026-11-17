import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
   links = [
    { name: 'Accueil'},
    { name: 'Profil' },
    { name: 'Conférences' },
    { name: 'Détail' },
    { name: 'Amis' },
    { name: 'Notifications' }
  ];

}