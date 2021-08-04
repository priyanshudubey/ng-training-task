import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/note';

@Component({
  selector: 'app-notes-comp',
  templateUrl: './notes-comp.component.html',
})
export class NotesCompComponent {

  notes:Note[] = [
    {id:1, title:"Shopping", body:"To buy jeans"},
    {id:2, title:"Insurance", body:"To renew my car insurance"},
    {id:3, title:"grocery", body:"To buy some chocolates"},
  ]

}
