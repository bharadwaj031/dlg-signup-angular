import { Injectable } from "@angular/core"
import { Service } from "../service"
import { Observable } from "rxjs"
import { ICustomer, IResponse } from "../../interfaces/customer.interface"
import { API } from "../../constants/constants"

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    constructor(private service: Service){
        //empty constructor
    }

    createCustomer(customer: ICustomer): Observable<IResponse> {
        return this.service.post(API.SIGNUP, customer)
    }
}