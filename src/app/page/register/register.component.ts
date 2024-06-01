import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export default class RegisterComponent {

  constructor(){ }

}
