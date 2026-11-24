import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Conference } from '../../Model/conference';

@Component({
  selector: 'app-conference-list',
  imports: [DatePipe],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {

  conferences: Conference[] = [
  {
   id: 1,
   title: 'Angular 21 Conference',
   description: 'Les nouveautés d’Angular 21 : signals, zoneless et contrôle de flux natif.',
   date: new Date(2027, 10, 15),
   place: 'Tunis',
   maxParticipants: 100,
   nbParticipants: 75,
  },
  {
   id: 2,
   title: 'Signals Workshop',
   description: 'Atelier pratique sur la gestion d’état réactive avec les signals.',
   date: new Date(2027, 10, 30),
   place: 'Ariana',
   maxParticipants: 30,
   nbParticipants: 24,
  },
  {
   id: 3,
   title: 'Web Conference',
   description: 'Panorama des technologies web modernes.',
   date: new Date(2027, 10, 20),
   place: 'Sousse',
   maxParticipants: 50,
   nbParticipants: 50,
  },
  {
   // Conférence passée : elle ne doit PAS apparaître (filtre « à venir »)
   id: 4,
   title: 'TypeScript Day',
   description: 'Édition 2025, déjà terminée.',
   date: new Date(2025, 4, 10),
   place: 'Monastir',
   maxParticipants: 80,
   nbParticipants: 80,
  },
 ];

  get upcomingConferences(): Conference[] {
    return this.conferences.filter(
      conference => conference.date.getTime() > Date.now()
    );
  }
}
