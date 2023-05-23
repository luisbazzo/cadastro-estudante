import { Component, OnInit } from '@angular/core';
import { student } from '../student';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{

  student : student[] = [];
  formGroupStudent  : FormGroup;

  constructor(private StudentService : StudentService,
              private formBuilder : FormBuilder
              ){
    this.formGroupStudent = formBuilder.group({
      name : [''],
      lastname : [''],
      id : [''],
      birthday : [''],
      semester : ['']
    });
  }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(){
    this.StudentService.getStudents().subscribe(
      {
        next : data => this.student = data,
        error : () => console.log("Erro ao carregar os estudantes")
      }
    );
  }

  save(){
    this.StudentService.save(this.formGroupStudent.value).subscribe(
      {
        next : data => {
          this.student.push(data);
          this.formGroupStudent.reset();
        }
      }
    );
  }

}
