import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private activeRoute:ActivatedRoute,private router:Router){}
  getAuth()
  {
    this.router.navigate(['/auth'],{relativeTo:this.activeRoute})
  }
}
