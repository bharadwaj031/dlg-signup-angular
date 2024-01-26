import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer/customer.service';
import { ICustomer, IResponse } from '../../interfaces/customer.interface';
import { DlgDynamicFormComponent } from '../common/dlg.dynamic-form/dlg.dynamic-form.component';
import { IDynamicForm } from '../../interfaces/form.interface';
import { signupFormConfig } from '../../constants/signupForm.config';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { SpinnerState } from '../../store/spinner/spinner.model';
import { startSpinner } from '../../store/spinner/spinner.action';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { createCustomerAction, resetAction } from '../../store/createCustomer/create-cusomter.action';
import { CUSTOMER } from '../../constants/constants';


/**
 * @description: This component consumes the signup form from dynamic from
 * @implements OnInit
 * @template dlg.signup.component.html
 */
@Component({
  selector: 'dlg-signup',
  standalone: true,
  imports: [DlgDynamicFormComponent, MatProgressSpinnerModule, CommonModule],
  templateUrl: './dlg.signup.component.html',
  styleUrl: './dlg.signup.component.scss'
})
export class DlgSignupComponent implements OnInit {

  signupFormConfig: IDynamicForm = signupFormConfig
  loading$!: Observable<SpinnerState>
  customerCreateResp$!: Observable<IResponse>

  constructor(private store: Store<State>) {
    // empty constructor
    this.loading$ = this.store.select('spinner')
    this.customerCreateResp$ = this.store.select(CUSTOMER)
  }

  ngOnInit() {
    /**
     * We can add analytics tracking event to track the event
     * tracker.trackEvent({event: 'Signup_Page_View'})
     */
  }


  /**
   * @description This menthod is used to submit the signup form
   * @param customerSignupFormData
   * @interface ICustomer Response
   * @interface Response
   * @returns The response fromm the createCustomer Service is returned
   */
  onSubmit(customerSignupFormData: ICustomer) {
    this.store.dispatch(startSpinner())
    this.store.dispatch(createCustomerAction({ customer: customerSignupFormData }))


    /**
     * To clear the Successfull banner like toast message
     */
    setTimeout(() => this.store.dispatch(resetAction()), 5000)
    /**
     * We can add analytics tracking event to track the event with datalayer push
     * tracker.trackEvent({event: 'signup_submit'})
     * window.dataLayer.push({event: 'signup', client: 'Desktop', geolocation: 'UK'})
     */
    
    /**
     * Use the below code can used with async pipe within the html along with CommonModule and without ngRx
     * this.respData = this.customerService.createCustomer(customerSignupFormData as ICustomer)
     */
    
    //   try {
    //   this.customerService.createCustomer(customerSignupFormData as ICustomer).pipe(delay(2000)).subscribe((data: Response) => {
    //     this.store.dispatch(stopSpinner())
    //     this.respData = data
    //     })
    //   } catch(e){
    //   /**
    //    * Throw to the centralise Error Management service to capture and log with the monitoring system
    //    */
    //   console.error(e)
    //  }
  }
}
