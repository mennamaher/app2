import { Component } from '@angular/core';
import { card } from '../interface/data';

@Component({
  selector: 'app-recommend',
  standalone: true,
  imports: [],
  templateUrl: './recommend.component.html',
  styleUrl: './recommend.component.css'
})
export class RecommendComponent {
  recData : card[] = [
    { cName:"card 1", imgg:"../../assets/images/1 (1).jfif"},
    { cName:"card 2", imgg:"../../assets/images/images.png"},
    { cName:"card 3", imgg:"../../assets/images/images.jfif"},
    { cName:"card 1", imgg:"../../assets/images/1 (1).jfif"},
    { cName:"card 2", imgg:"../../assets/images/images.png"},
    { cName:"card 3", imgg:"../../assets/images/images.jfif"},
    { cName:"card 1", imgg:"../../assets/images/1 (1).jfif"},
    { cName:"card 2", imgg:"../../assets/images/images.png"},
    { cName:"card 3", imgg:"../../assets/images/images.jfif"},
    { cName:"card 1", imgg:"../../assets/images/1 (1).jfif"},
    { cName:"card 2", imgg:"../../assets/images/images.png"},
    { cName:"card 3", imgg:"../../assets/images/images.jfif"},



  ]

}
