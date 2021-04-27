import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { FxService } from 'src/app/services/fx.service';

@Component({
  selector: 'app-fxwidget',
  templateUrl: './fxwidget.component.html',
  styleUrls: ['./fxwidget.component.scss']
})
export class FxwidgetComponent implements OnInit {

  isBuy = new BehaviorSubject<boolean>(true);

  rateForm = this.formBuilder.group({
    buySellCurr: new FormControl('EUR'),
    buySellAmount: new FormControl('1.0'),
    offerCurrency: new FormControl('PHP'),
  });
  offerRate = new FormControl('0.0');
  exchangeValue = new FormControl('0.0');
  currs = this.fxService.getCurrs() || [];

  constructor(public fxService: FxService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // compute defaults
    this.updateValues();
    // when form is updated, compute for changes
    this.rateForm.valueChanges.subscribe(() => {
      this.updateValues();
    });
    // when button toggle is triggeres, compute for changes
    this.isBuy.subscribe(() => this.updateValues());
  }

  toggle(v: boolean) {
    this.isBuy.next(v);
  }

  updateValues() {
    this.exchangeValue.patchValue(this.fxService.getRate(this.buySellCurr.value, this.offerCurrency.value));
    this.offerRate.patchValue(this.isBuy.value ?
      this.fxService.getBuyRate(this.buySellCurr.value, this.buySellAmount.value, this.offerCurrency.value) :
      this.fxService.getSellRate(this.buySellCurr.value, this.buySellAmount.value, this.offerCurrency.value)
    );
  }

  get buySellCurr() {
    return this.rateForm.controls.buySellCurr;
  }

  get offerCurrency() {
    return this.rateForm.controls.offerCurrency;
  }

  get buySellAmount() {
    return this.rateForm.controls.buySellAmount;
  }

}
