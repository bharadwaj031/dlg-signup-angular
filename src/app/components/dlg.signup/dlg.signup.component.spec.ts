import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DlgSignupComponent } from './dlg.signup.component';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

describe('DlgSignupComponent', () => {
  let component: DlgSignupComponent;
  let fixture: ComponentFixture<DlgSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DlgSignupComponent],
      providers: [{
        provide: Store,
        useValue: {
          pipe: () => { },
          dispatch: () => { },
          select: () => { }
        }
      }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DlgSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create DlgSignupComponent', fakeAsync(() => {
    component.onSubmit({firstName: 'XYZ', lastName: 'ABC', email: 'a@b.com'})
    tick(5000)
    fixture.detectChanges();
    fixture.whenStable().then(() =>{
      expect(component).toBeTruthy();
    })
  }));
});
