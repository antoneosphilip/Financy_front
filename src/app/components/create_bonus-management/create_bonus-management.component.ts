import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bonus-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="bonus-form">
      <h2>Create Bonus</h2>
      <form [formGroup]="bonusForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="title">Title:</label>
          <input id="title" type="text" formControlName="title">
          <div *ngIf="bonusForm.get('title')?.errors?.['required'] && bonusForm.get('title')?.touched">
            Title is required
          </div>
        </div>

        <div class="form-group">
          <label for="reason">Reason:</label>
          <textarea id="reason" formControlName="reason"></textarea>
          <div *ngIf="bonusForm.get('reason')?.errors?.['required'] && bonusForm.get('reason')?.touched">
            Reason is required
          </div>
        </div>

        <div class="form-group">
          <label for="amount">Amount:</label>
          <input id="amount" type="number" formControlName="amount">
          <div *ngIf="bonusForm.get('amount')?.errors?.['required'] && bonusForm.get('amount')?.touched">
            Amount is required
          </div>
        </div>

        <div class="form-group">
          <label for="userId">User ID:</label>
          <input id="userId" type="text" formControlName="userId">
          <div *ngIf="bonusForm.get('userId')?.errors?.['required'] && bonusForm.get('userId')?.touched">
            User ID is required
          </div>
        </div>

        <button type="submit" [disabled]="!bonusForm.valid">Submit</button>
      </form>
    </div>
  `,
  styles: [`
    .bonus-form {
      max-width: 500px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
    .form-group {
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input, textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    textarea {
      height: 100px;
    }
    button {
      background-color: #007bff;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:disabled {
      background-color: #cccccc;
    }
    div[class*="errors"] {
      color: red;
      font-size: 12px;
      margin-top: 5px;
    }
  `]
})
export class CreateBonusManagementComponent {
  bonusForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bonusForm = this.fb.group({
      title: ['', Validators.required],
      reason: ['', Validators.required],
      amount: ['', Validators.required],
      userId: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.bonusForm.valid) {
      console.log(this.bonusForm.value);
      // Here you would typically send the data to your backend
    }
  }
}