import { Component, OnInit } from '@angular/core';
import { FxService } from './services/fx.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fxwidget';

  isLoaded$ = this.fxService.isLoaded();

  constructor(private fxService: FxService) {}

  ngOnInit() {
    // initialize rates
    this.fxService.getRates();
  }
}
