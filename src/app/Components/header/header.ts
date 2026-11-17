import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = signal("Conferencia")
  msg = signal("Bienvenue sur l'application de gestion des conférences !")

}
