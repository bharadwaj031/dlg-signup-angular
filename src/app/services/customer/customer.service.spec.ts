import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from './customer.service';
import { ICustomer } from '../../interfaces/customer.interface';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { Service } from '../service';


describe('Customer Service', () => {
    let customerService: CustomerService
    let service: Service
    beforeEach((() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: HttpClient, useValue: null },
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

        customerService = TestBed.inject(CustomerService)
        service = TestBed.inject(Service)
    }));
    it('should be defined CustomerService', () => {
        expect(customerService).toBeDefined();
    });
    it('should call createCustomer', (done) => {
        spyOn(service, 'post').and.returnValue(of({status: 'sucess', message: 'Sucessful'}))
        customerService.createCustomer({} as ICustomer)
        expect(customerService).toBeDefined();
        expect(service.post).toHaveBeenCalled()
        done()
    });
});