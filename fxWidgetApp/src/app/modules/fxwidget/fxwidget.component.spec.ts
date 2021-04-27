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
    fxServiceSpy.getRate = () =>  2;
    fxServiceSpy.getBuyRate = () =>  5;
    fxServiceSpy.getSellRate = () =>  4;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle isBuy', () => {
    expect(component.isBuy.value).toBeTruthy();
    component.toggle(false);
    expect(component.isBuy.value).toBeFalsy();
  });

  it('should update values', () => {
    component.updateValues();
    expect(component.exchangeValue.value).toEqual(2);
    component.isBuy.next(true);
    component.updateValues();
    expect(component.offerRate.value).toEqual(5);
    component.isBuy.next(false);
    component.updateValues();
    expect(component.offerRate.value).toEqual(4);
  });

  it('should return buysellcurr control', () => {
    const curr = component.buySellCurr;
    expect(curr.value).toEqual('EUR');
  });

  it('should return offercurr control', () => {
    const curr = component.offerCurrency;
    expect(curr.value).toEqual('PHP');
  });

  it('should return buysellamount control', () => {
    const curr = component.buySellAmount;
    expect(curr.value).toEqual('1.0');
  });
});
