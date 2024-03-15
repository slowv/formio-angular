import { Component, OnInit } from '@angular/core';
import {ShareModule} from "../../../../shared/share.module";

@Component({
  standalone: true,
  imports: [ShareModule],
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
