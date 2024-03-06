import {Component, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/appState";
import {ShareModule} from "../../share.module";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [ShareModule, CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  isSpinning = true;
  @Input()
  ngStyle?: { [klass: string]: any; }

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select((state: AppState) => state.config.spinner).subscribe(isSpinning => this.isSpinning = isSpinning);
  }
}
