import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { FxService } from 'src/app/services/fx.service';
import { FxwidgetComponent } from './fxwidget.component';


describe('FxwidgetComponent', () => {
  let component: FxwidgetComponent;
  let fixture: ComponentFixture<FxwidgetComponent>;
  let fxServiceSpy: FxService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxwidgetComponent ],
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        HttpClient,
        FormBuilder,
        {
          provide: FxService, useValue: {
            ...jasmine.createSpyObj('FxService', ['getCurrs', 'getRate', 'getBuyRate', 'getSellRate'])
          }
        }
      ]
    })
    .compileComponents();
    fxServiceSpy = TestBed.inject(FxService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
