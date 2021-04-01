import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,FormsModule], 
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    let http : HttpClient;
    component = new AppComponent(http);
  });

  it('test_case1',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    app.country="Australia"
    app.onChangeCountry();
    expect(app.listCountry[0].name).toBe("Australia");

});

});
