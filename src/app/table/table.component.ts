import { Component } from '@angular/core';
//import { TableComponent } from './table.component';


@Component({
  selector: 'app-table',
  imports: [TableComponent],
 templateUrl: './table.component.html',
 
  styleUrl: './table.component.css'
})
export class TableComponent {
users =[
  {
    id:1,
    name :'Alfi',
    class:'Eight',
    city: 'Khulna',
    picture:"https://randomuser.me/api/portraits/lego/3.jpg"
  },

  {
    id:2,
    name :'Ashfi',
    class:'Seven',
    city: 'Khulna',
    picture:"https://randomuser.me/api/portraits/lego/7.jpg"
  },


  {
    id:3,
    name :'Ayat',
    class:'Four',
    city: 'Dhaka',
    picture:"https://randomuser.me/api/portraits/lego/0.jpg"
  }

 
]
}
