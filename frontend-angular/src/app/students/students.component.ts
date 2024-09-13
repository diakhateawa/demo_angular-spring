import { Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Router} from "@angular/router";
import { StudentsService } from '../services/students.service'; // Assurez-vous d'importer correctement votre service
import {Student} from "../models/students.models";


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{
   students!: Array<Student>;
  // public dataSource : any;
  // les colonnes qu'on voulait ajouter
/*  public displayedColumns = ["id", "firstName", "lastName", "paiements"]
  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;*/
  constructor( private studentsService : StudentsService){

  }

  ngOnInit(): void {

    this.studentsService.getStudent()
      .subscribe({
        next : value => {
          this.students = value;
       /*   this.dataSource = new MatTableDataSource(this.paiements);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;*/
        },
        error : err => {
          console.log(err);
        }
      })
  }








}
