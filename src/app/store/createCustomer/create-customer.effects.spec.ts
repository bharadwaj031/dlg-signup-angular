import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';

import { Store } from '@ngrx/store';
import { DlgSignupComponent } from '../../components/dlg.signup/dlg.signup.component';
import { CustomerService } from '../../services/customer/customer.service';
import { ICustomer, IResponse } from '../../interfaces/customer.interface';
import { CreateCustomerEffects } from './create-customer.effects';
import { provideMockActions } from '@ngrx/effects/testing'
import { CreateCustomerAction, createCustomerAction, createCustomerFailAction, createCustomerSucessAction } from './create-cusomter.action';
import { Observable, delay, of, throwError } from 'rxjs';

describe('Create Cusomter Service Effects', () => {
  let component: DlgSignupComponent;
  let fixture: ComponentFixture<DlgSignupComponent>;
  let service: CustomerService
  let effects: CreateCustomerEffects
  let actions: Observable<CreateCustomerAction>
  beforeEach((() => {
    TestBed.configureTestingModule({
      providers: [
        CreateCustomerEffects,
        provideMockActions(() => actions),
        {
          provide: CustomerService,
          useValue: {
            createCustomer: (customer: ICustomer) => { },
          }
        },
        {
          provide: Store,
          useValue: {
            pipe: () => { },
            dispatch: () => { },
            select: () => { }
          }
        }
      ],
      imports: [DlgSignupComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    service = TestBed.inject(CustomerService)
    effects = TestBed.inject(CreateCustomerEffects);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should return success action', () => {
    const fakeResponse = { status: 'sucess', message: 'Sucess' } as IResponse
    spyOn(service, 'createCustomer').and.returnValue(of(fakeResponse))
    const expectedAction = createCustomerSucessAction({ response: fakeResponse })
    actions = of(createCustomerAction)
    effects.createCustomer$.pipe(delay(2000)).subscribe(r => expect(r).toEqual(expectedAction))
    expect(component).toBeTruthy();
  });
  it('should return failure', () => {
    const fakeResponse = { status: 'failure', message: 'fail' } as IResponse
    spyOn(service, 'createCustomer').and.returnValue(throwError(() => fakeResponse))

    const expectedAction = createCustomerFailAction({ response: fakeResponse })
    actions = of(createCustomerAction)
    effects.createCustomer$.subscribe(r => expect(r).toEqual(expectedAction))
    expect(component).toBeTruthy();
  });
});