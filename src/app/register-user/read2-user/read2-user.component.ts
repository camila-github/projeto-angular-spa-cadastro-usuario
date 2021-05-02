import { RegisterUser } from '../register-user.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Read2UserDataSource } from './read2-user-datasource';

@Component({
  selector: 'app-read2-user',
  templateUrl: './read2-user.component.html',
  styleUrls: ['./read2-user.component.css']
})
export class Read2UserComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<RegisterUser>;
  dataSource: Read2UserDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'urlFoto', 'email', 'cep'];

  ngOnInit() {
    this.dataSource = new Read2UserDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
