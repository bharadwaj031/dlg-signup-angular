import { Component, ViewEncapsulation } from '@angular/core';
import { DlgSignupComponent } from './components/dlg.signup/dlg.signup.component';


//https://run.mocky.io/v3/24773c96-ea89-47c7-bb16-437bf244eb3a
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DlgSignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'DLG Signup';
}
