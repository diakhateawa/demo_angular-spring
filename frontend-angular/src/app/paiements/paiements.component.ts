import { Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { StudentsService } from '../services/students.service'; // Assurez-vous d'importer correctement votre service



@Component({
  selector: 'app-paiements',
  templateUrl: './paiements.component.html',
  styleUrl: './paiements.component.css'
})
export class PaiementsComponent implements OnInit, AfterViewInit {
  public paiements : any;
  public displayedColumns = ['id','date','type','status','amount','firstName'];
  public dataSource : any;
  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
  constructor( private studentsService : StudentsService) {
  }
  ngOnInit() {
    this.studentsService.getAllPaiement()
      .subscribe({
        next : value => {
          this.paiements = value;
          this.dataSource = new MatTableDataSource(this.paiements);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error : err => {
          console.log(err);
        }
      })
  }
  ngAfterViewInit() {

  }
}

