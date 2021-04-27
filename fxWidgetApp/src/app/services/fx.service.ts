import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FxService {

  // act as a storage for the current state of the rates
  private rates = new BehaviorSubject<any>(undefined);

  constructor(private httpClient: HttpClient) { }

  // act as indicator for loaded state
  isLoaded(): Observable<boolean> {
    return this.rates.pipe(map(_r => _r && _r.success ? _r.success: false));
  }

  // TODO: api keys should be secured and can be placed in our env variables
  getRates() {
    // free api limits to 250 requests per day
    this.httpClient.get<any>('http://api.exchangeratesapi.io/v1/latest?access_key=ad129c77b950688a5fbd2db292c03d26').pipe().subscribe(data => this.rates.next(data));
  }

  getBuyRate(buySellCurr: string, amt: number, homeCurr: string): number {
    return this.convert(buySellCurr, amt, homeCurr);
  }

  // 0.99 should be based on market charge rates when selling
  getSellRate(buySellCur: string, amt: number, homeCurr: string): number {
    return Number((this.convert(buySellCur, amt, homeCurr) * .99).toFixed(2));
  }

  private convert(buySellCur: string, amt: number, homeCurr: string): number {
    return Number(((1 / this.rates.value?.rates[buySellCur]) * amt * this.rates.value?.rates[homeCurr]).toFixed(2));
  }

  getRate(buySellCur: string, homeCurr: string): number {
    return Number(((1 / this.rates.value?.rates[buySellCur]) * this.rates.value?.rates[homeCurr]).toFixed(2));
  }

  // map the different currencies to be used as select options in the app
  getCurrs(): any[] {
    return Object.keys(this.rates.value?.rates).map(_k => ({value: _k, name: _k}));
  }
}
