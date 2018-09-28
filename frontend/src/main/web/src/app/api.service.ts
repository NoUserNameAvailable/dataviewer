import {Injectable, Query} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {QueryResult} from './query/query.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:4567';

  constructor(
    private http: HttpClient,
  ) {
  }

  getDatabases() {
    return this.http.get<String[]>(`${this.baseUrl}/databases`);
  }

  getTables(database: String) {
    const dbQuery: Database = {database} as Database;
    return this.http.post<String[]>(`${this.baseUrl}/tables`, dbQuery);
  }

  getVariables(database: String, table: String) {
    const tableQuery: Table = {database, table} as Table;
    return this.http.post<String[]>(`${this.baseUrl}/variables`, tableQuery);
  }

  query(database: String, table: String, variable: String) {
    const variableQuery: Variable = {database, table, variable} as Variable;
    return this.http.post<QueryResult>(`${this.baseUrl}/query`, variableQuery);
  }

}

export interface Database {
  database: String;
}

export interface Table {
  database: String;
  table: String;
}

export interface Variable {
  database: String;
  table: String;
  variable: String;
}
