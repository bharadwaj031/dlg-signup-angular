import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';

import { IDynamicForm, IFormControl, IFormValidator } from '../../../interfaces/form.interface';
import { ICustomer } from '../../../interfaces/customer.interface';
import { ThemePalette } from '@angular/material/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SPINNER_THEME, SUBMIT, VALIDATORS } from '../../../constants/constants';
import { SpinnerState } from '../../../store/spinner/spinner.model';

const {color, mode} = SPINNER_THEME
/**
 * @description: This common reusable component generates the dynamic form
 * @implements OnInit
 * @template dlg.dynamic-form.component.html
 */
@Component({
  selector: 'dlg-dynamic-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatProgressSpinnerModule, CommonModule],
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: './dlg.dynamic-form.component.html',
  styleUrl: './dlg.dynamic-form.component.scss'
})
export class DlgDynamicFormComponent implements OnInit {

  @Input() form!: IDynamicForm
  @Input() loading!: Observable<SpinnerState>
  @Output() submit = new EventEmitter<ICustomer>()
  dynamicForm!: FormGroup
  color: ThemePalette = color as ThemePalette;
  mode: ProgressSpinnerMode = mode as ProgressSpinnerMode

  constructor(private formBuilder: FormBuilder){
    this.dynamicForm = this.formBuilder.group({}, { updateOn: SUBMIT })
  }

  ngOnInit(): void {
    const {REQUIRED, MIN_LENGTH, PATTERN, MAX_LENGHT, EMAIL} = VALIDATORS
    if (this.form?.formControls) {
      const formGroup: any = {};
      this.form.formControls.forEach((control: any) => {
        const validators: any = [];
        if (control.validators) {
          control.validators.forEach((validator: any) => {
            if (validator.name === REQUIRED) validators.push(Validators.required);
            if (validator.name === EMAIL) validators.push(Validators.email);
            if (validator.name === MIN_LENGTH) validators.push(Validators.minLength(validator.minLength));
            if (validator.name === PATTERN) validators.push(Validators.pattern(validator.pattern));
            if (validator.name === MAX_LENGHT) validators.push(Validators.maxLength(validator.maxLength));
          });
        }
        formGroup[control.name] = [control.value || '', validators];
      });
      this.dynamicForm = this.formBuilder.group(formGroup);
    }
  }

  onSubmit(): void {
    if (this.dynamicForm.valid) {
      this.submit.emit(this.dynamicForm.value)
      this.onReset()
    }
  }

  onReset(): void {
    this.dynamicForm.reset()
  }


  /**
   * @description this method/function catches the input the error validation
   * @param control 
   * @returns error:string
   */
  getErrorMessage(control: IFormControl): string {
    let error: string = ''
    const formControls = this.dynamicForm.get(control.name)
    control.validators.forEach((v: Omit<IFormValidator, 'pattern'>) => {
      if(formControls?.hasError(v.name) && this.dynamicForm.get(control.name)?.touched){
        error = v.message
      }
    })
    return error
  }
}
