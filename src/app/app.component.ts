import { Component } from '@angular/core';

import { TableComponent } from './table/table.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardsComponent } from './cards/cards.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent,HeaderComponent],
  templateUrl: './app.component.html',
  // template:`
  
  // `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  
    
    }
    

