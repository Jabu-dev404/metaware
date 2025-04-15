import { Component } from '@angular/core'
import { HeaderComponent } from './components/header/header.component';
import { OptionComponent } from "./components/option/option.component";
import { RouterOutlet } from '@angular/router';
 

@Component({
  selector: 'app-root',
  standalone:true,
<<<<<<< HEAD
  imports: [HeaderComponent, OptionComponent, RouterOutlet],
=======
  imports: [ HeaderComponent, OptionComponent,RouterOutlet],
>>>>>>> 577e12fbef2163432f2fd92011ac666da3535022
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-admin';
}
