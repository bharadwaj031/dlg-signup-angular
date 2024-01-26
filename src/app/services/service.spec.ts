import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Service } from './service';


describe('Service', () => {
    let httpController: HttpTestingController;
    let service: Service;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        service = TestBed.inject(Service);
        httpController = TestBed.inject(HttpTestingController);
    });
    it('should be created', () => {
        const service: Service = TestBed.inject(Service);
        expect(service).toBeTruthy();
    });

    it('should call get from Service', (done) => {
        service.get('asdfasdb').subscribe((res) => {
            expect(res).toEqual({});
        });
        const req = httpController.expectOne({
            method: 'GET',
            url: `https://run.mocky.io/v3/asdfasdb`,
        });
        req.flush({});
        done()
    })
    it('should call post from Service', (done) => {
        service.post('', {}).subscribe((res) => {
            console.log('>>>>', res)
            expect(res).toEqual({});
        });
        const req = httpController.expectOne({
            method: 'POST',
            url: `https://run.mocky.io/v3/`,
        });
        req.flush({});
        done()
    })
});