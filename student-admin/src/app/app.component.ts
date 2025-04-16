import { Component } from '@angular/core'
import { HeaderComponent } from './components/header/header.component';
import { OptionComponent } from "./components/option/option.component";
import { RouterOutlet } from '@angular/router';
 

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent, OptionComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-admin';
}
