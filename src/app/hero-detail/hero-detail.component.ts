import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  //  using Input makes hero available to be used in the parent component ie. HeroesComponent
  @Input() hero: Hero;

  constructor() { }

  ngOnInit(): void {
  }
  

}
