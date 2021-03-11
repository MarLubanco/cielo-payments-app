import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { TableService } from './data-analyst/table/table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Teste Técnico - Cielo';
  descriptions= 'Dashboad de Pagamentos'
  constructor(private tableService: TableService) {
  }

  ngOnInit(): void {}
}
