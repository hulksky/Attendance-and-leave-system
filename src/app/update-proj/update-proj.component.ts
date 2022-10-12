import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-update-proj',
  templateUrl: './update-proj.component.html',
  styleUrls: ['./update-proj.component.css']
})
export class UpdateProjComponent implements OnInit {

  projForm! : FormGroup;

  constructor(private projService : ProjectService,
    private router : Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    let projId = this.route.snapshot.params['id'];
    console.log('Proj id'+ projId);
    this.projService.getById(projId).subscribe(proj=>{
    this.projForm =new FormGroup({
      "id": new FormControl(proj.id),
      "name": new FormControl(proj.name, Validators.required),
      "domain" : new FormControl(proj.domain, Validators.required)

    });
  },err =>{
    alert(err);
    console.log(err);
  } )
  }

  onSubmit(){
    console.log(this.projForm);
    this.projService.update(this.projForm.value as unknown as Project).subscribe(res=>{
      alert("Project updated successfully");
      this.router.navigate(['/projects']);
    
    
    }, err=>{
      //alert(err);
      console.log(err)
    
    })

  }
}
