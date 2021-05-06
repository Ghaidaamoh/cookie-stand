'use strict';

let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

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
  for (let i = 0; i < 14; i++) {
    this.hourlyTotal[i] = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.averageCookieSale);
    this.Total += this.hourlyTotal[i];
    console.log(this.hourlyTotal[i]);
  }
};

cookies.prototype.render = function () {
  this.calcCookiesPerHour();
  let tableEl = document.getElementById('DataTable');

  let trElement = document.createElement('tr');
  tableEl.appendChild(trElement);

  let thElement = document.createElement('th');
  thElement.textContent = this.name;
  trElement.appendChild(thElement);

  for (let m = 0; m < this.hourlyTotal.length; m++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = this.hourlyTotal[m];
    trElement.appendChild(tdElement);
  }

  tdElement = document.createElement('td');
  tdElement.textContent = this.Total;
  trElement.appendChild(tdElement);
  tableEl.appendChild(trElement);
};

let seattle = new cookies('Seattle', 23, 65, 6.3, 6, 20);
let tokyo = new cookies('Tokyo', 3, 24, 1.2, 6, 20);
let dubai = new cookies('Dubai', 11, 38, 3.7, 6, 20);
let paris = new cookies('Paris', 20, 38, 2.3, 6, 20);
let lima = new cookies('Lima', 2, 16, 4.6, 6, 20);

let city = [seattle, tokyo, dubai, paris, lima];

for (let z = 0; z < city.length; z++) {
  city[z].calcCookiesPerHour();
}

let tableBody = document.getElementById('DataTable');

function rendertables() {
  let headerrow = document.createElement('tr');
  let headerstore = document.createElement('th');
  headerstore.textContent = 'Locations';
  headerrow.appendChild(headerstore);
  tableBody.appendChild(headerrow);
  for (let x = 0; x < hours.length; x++) {
    let headerhour = document.createElement('th');
    headerhour.textContent = hours[x];
    headerstore.appendChild(headerhour);
    headerrow.appendChild(headerhour);
  }
  let headertotal = document.createElement('th');
  headertotal.textContent = 'Daily Location Total';
  headerrow.appendChild(headertotal);
}

rendertables();
for (let y = 0; y < city.length; y++) {
  city[y].render();
}
rendertotal();

function rendertotal() {
  let headerrow = document.createElement('tr');
  tableBody.appendChild(headerrow);
  let tdElement1 = document.createElement('td');

  tdElement1.textContent = ' Totals';
  headerrow.appendChild(tdElement1);


  for (let i = 0; i < hours.length; i++) {
    let total = 0;
    let allTotal =0;
    for (let j = 0; j < city.length; j++) {
      total += city[j].hourlyTotal[i];
      allTotal += city[j].hourlyTotal[i];
    }
    let tdElement2 = document.createElement('td');
    headerrow.appendChild(tdElement2);
    tdElement2.textContent = total;
   
  }
  let tdElement3 = document.createElement('td');
  headerrow.appendChild(tdElement3);
  tdElement3.textContent = allTotal;

  
}

let cookiesForm = document.getElementById('cookiesForm');
cookiesForm.addEventListener('submit', addingSalmonCookies);
function addingSalmonCookies(event) {
  event.preventDefault();
  let name = event.target.name.value;
  let minCust = event.target.minCust.value;
  let maxCust = event.target. maxCust.value;
  let  averageCookieSale = event.target.averageCookieSal.value;
  let openTime = event.target.openTime .value;
  let  closeTime = event.target. closeTime .value;

  let newCookies = new cookies(name,minCust, maxCust,  averageCookieSale,openTime, closeTime)
  newCookies.calcCookiesPerHour();
  newCookies.render();
 
}

