import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgDynamicFormComponent } from './dlg.dynamic-form.component';
import { signupFormConfig } from '../../../constants/signupForm.config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

describe('DlgDynamicFormComponent', () => {
  let component: DlgDynamicFormComponent;
  let fixture: ComponentFixture<DlgDynamicFormComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DlgDynamicFormComponent, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule, CommonModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DlgDynamicFormComponent);
    element = fixture.nativeElement;
    component = fixture.componentInstance;
  });

  afterEach(() =>{
    fixture.detectChanges();
  })

  it('should create DlgDynamicFormComponent', () => {
    const mockFormConfig = {...signupFormConfig}
    mockFormConfig.formControls[0].validators.push({
      "name": "minlength",
      "minlength": "3",
      "message": "First name should be 3-15 characters"
    }, {
      "name": "maxlength",
      "maxlength": "15",
      "message": "First name should be 3-15 characters"
    })
    component.form = signupFormConfig
    component.onSubmit()
    expect(component).toBeTruthy()
  });
  it('should have valid form', () => {
    component.form = signupFormConfig
    component.ngOnInit()
    const inputEle = document.querySelector('input')
    inputEle?.focus()
    component.dynamicForm.controls['firstName'].setValue('asss');
    component.dynamicForm.controls['lastName'].setValue('bassd');
    component.dynamicForm.controls['email'].setValue('a@b.com');
    inputEle?.blur();
    expect(component.dynamicForm.valid).toEqual(true);
  });
  it('should have invalid focus input form', () => {
    component.form = signupFormConfig
    component.ngOnInit()
    const inputEle = document.querySelector('input')
    inputEle?.focus()
    inputEle?.blur();
    expect(component.dynamicForm.valid).toEqual(false);
  });
  it('should have invalid form', () => {
    component.form = signupFormConfig
    component.ngOnInit()
    component.dynamicForm.controls['firstName'].setValue('');
    expect(component.dynamicForm.valid).toEqual(false);
  });
});
