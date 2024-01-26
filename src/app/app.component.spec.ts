import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { DlgSignupComponent } from './components/dlg.signup/dlg.signup.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, DlgSignupComponent],
      providers: [{ provide: HttpClient, useValue: null }, {
        provide: Store,
        useValue: {
          pipe: () => { },
          dispatch: () => { },
          select: () => { }
        }
      }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'dlg-signup' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app?.title).toEqual('DLG Signup');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    console.log(compiled)
    expect(compiled.querySelector('h2')?.textContent).toContain('Signup');
  });
});
