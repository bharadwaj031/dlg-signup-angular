import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CustomerService } from "../../services/customer/customer.service";
import { catchError, delay, map, of, switchMap } from "rxjs";
import { ICustomer, IResponse } from "../../interfaces/customer.interface";
import { createCustomerAction, createCustomerFailAction, createCustomerSucessAction } from "./create-cusomter.action";
import { stopSpinner } from "../spinner/spinner.action";

@Injectable()
export class CreateCustomerEffects {
    constructor(private actions$: Actions, private customerService: CustomerService) {}

    createCustomer$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(createCustomerAction),
            switchMap((action) => this.customerService.createCustomer(action.customer).pipe(delay(1500),
                switchMap((response: IResponse) => of(
                    createCustomerSucessAction({ response }),
                    stopSpinner()
                )),
                catchError((response: IResponse) => of(createCustomerFailAction({ response })))
            )
            )
        );
    })
}