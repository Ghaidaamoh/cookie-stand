'use strict';

var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function cookies(name, minCust, maxCust, averageCookieSale, openTime, closeTime) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageCookieSale = averageCookieSale;
  this.openTime = openTime;
  this.closeTime = closeTime;
  this.hourlyTotal = [];
  this.Total = 0;
}

cookies.prototype.calcCookiesPerHour = function () {
  for (var i = 0; i < 14; i++) {
    this.hourlyTotal[i] = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.averageCookieSale);
    this.Total += this.hourlyTotal[i];
    console.log(this.hourlyTotal[i]);
  }
};

cookies.prototype.render = function () {
  this.calcCookiesPerHour();
  var tableEl = document.getElementById('dataTable');

  var trElement = document.createElement('tr');
  tableEl.appendChild(trElement);

  var thElement = document.createElement('th');
  thElement.textContent = this.name;
  trElement.appendChild(thElement);

  for (var j = 0; j < this.hourlyTotal.length; j++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = this.hourlyTotal[j];
    trElement.appendChild(tdElement);
  }

  tdElement = document.createElement('td');
  tdElement.textContent = this.Total;
  trElement.appendChild(tdElement);
  tableEl.appendChild(trElement);
};

var seattle = new cookies('Seattle', 23, 65, 6.3, 6, 20);
var tokyo = new cookies('Tokyo', 3, 24, 1.2, 6, 20);
var dubai = new cookies('Dubai', 11, 38, 3.7, 6, 20);
var paris = new cookies('Paris', 20, 38, 2.3, 6, 20);
var lima = new cookies('Lima', 2, 16, 4.6, 6, 20);

var city = [seattle, tokyo, dubai, paris, lima];

for (var z = 0; z < city.length; z++) {
  city[z].calcCookiesPerHour();
}

var tableBody = document.getElementById('dataTable');

function rendertable() {
  var headerrow = document.createElement('tr');
  var headerstore = document.createElement('th');
  headerstore.textContent = 'Locations';
  headerrow.appendChild(headerstore);
  tableBody.appendChild(headerrow);
  for (var i = 0; i < hours.length; i++) {
    var headerhour = document.createElement('th');
    headerhour.textContent = hours[i];
    headerstore.appendChild(headerhour);
    headerrow.appendChild(headerhour);
  }
  var headertotal = document.createElement('th');
  headertotal.textContent = 'Daily Location Total';
  headerrow.appendChild(headertotal);
}

rendertable();
for (var i = 0; i < city.length; i++) {
  city[i].render();
}
rendertotal();

function rendertotal() {
  var headerrow = document.createElement('tr');
  tableBody.appendChild(headerrow);
  var tdElement = document.createElement('td');

  tdElement.textContent = ' Totals';
  headerrow.appendChild(tdElement);


  for (var i = 0; i < hours.length; i++) {
    var total = 0;
    var allTotal=0;
    for (var j = 0; j < city.length; j++) {
      total += city[j].hourlyTotal[i];
      allTotal += city[j].hourlyTotal[i];
    }
    var tdElement = document.createElement('td');


    tdElement.textContent = total;

    headerrow.appendChild(tdElement);
    tdElement.textContent = total;
   
  }
  var tdElement = document.createElement('td');
  headerrow.appendChild(tdElement);
  tdElement.textContent = allTotal;
  
}