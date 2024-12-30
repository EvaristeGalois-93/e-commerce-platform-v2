import { Component, Input, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/categories.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  @Input() categories: Categories[] = []

  ngOnInit(){
    console.log('categorie', this.categories);
  }
}
