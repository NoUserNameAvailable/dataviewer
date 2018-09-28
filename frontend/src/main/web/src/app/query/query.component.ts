import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../api.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  displayedColumns: string[] = ['name', 'count', 'averageAge'];
  databases = [];
  tables = [];
  variables = [];

  queryParams: QueryParams = {} as QueryParams;
  queryResult: QueryResult = null;
  dataSource = null;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getDatabases().subscribe(data => {
      this.databases = data;
    });
    this.queryParams.database = '';
    this.queryParams.table = '';
    this.queryParams.variable = '';
  }

  databaseChange() {
    this.queryParams.table = '';
    this.queryParams.variable = '';
    this.variables = [];
    this.queryResult = null;
    this.dataSource = null;
    this.apiService.getTables(this.queryParams.database).subscribe(data => this.tables = data);
  }

  tableChange() {
    this.queryParams.variable = '';
    this.queryResult = null;
    this.dataSource = null;
    this.apiService.getVariables(this.queryParams.database, this.queryParams.table).subscribe(data => this.variables = data);
  }

  variableChange() {
    this.apiService.query(this.queryParams.database, this.queryParams.table, this.queryParams.variable).subscribe(data => {
      this.queryResult = data;
      this.dataSource = new MatTableDataSource(this.queryResult.columns);
      }
    );
  }

}

export interface QueryResult {
  variable: String;
  database: String;
  table: String;
  columns: ColumnResult[];
  rows: number;
}

export interface ColumnResult {
  name: String;
  count: String;
  averageAge: String;
}

export interface QueryParams {
  variable: String;
  database: String;
  table: String;
}
