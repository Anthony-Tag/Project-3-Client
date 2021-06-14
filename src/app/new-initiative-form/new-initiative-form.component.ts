import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InitiativeService } from '../services/initiative.service';
import { InitiativeDTO } from '../model/initiativeDTO';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-initiative-form',
  templateUrl: './new-initiative-form.component.html',
  styleUrls: ['./new-initiative-form.component.css'],
})
export class NewInitiativeFormComponent {
  public title: string;
  public description: string;

  initiativeForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private initiativeService: InitiativeService,
    public dialogRef: MatDialogRef<NewInitiativeFormComponent> //@Inject(MAT_DIALOG_DATA) public user: User
  ) {}

  onCancel() {
    this.dialogRef.close();
  }
  onSubmit() {
    this.initiativeService.postInitiative(this.initiativeForm.value);
    this.dialogRef.close('Saved!');
  }
}
