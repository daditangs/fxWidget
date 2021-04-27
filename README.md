# FX Calculator Widget

### Purpose of this application
This application will serve as a foreign exchange rate calculator.

Disclaimer: Sell rate deduction is merely dev's multiplier rate.

### Dev requirements

For you to successfully run this application, you must have the following installed in your computer:

Install node - 14.16.0
Use angular 11

### Install globally latest angular cli 
Note: You only need to install the cli, all projects with lower angular versions will still work on this cli version.

```
npm install -g @angular/cli@11
```
### To run the application

```
cd fxWidgetApp
```
```
npm install
```
```
ng serve --o
```

This should open your browsers to ```http://localhost:4200/```

### To run tests
```
ng test
```
or
```
ng test --watch
```

### Integration to public API's
The developer used exchangeratesapi.io for the list of currencies and it's latest currency rates using EU as the base rate.