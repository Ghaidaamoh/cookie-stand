"use strict"
let seattle = {
    nameLoc: 'seattle',
    minCustomers : 23,
    maxCustomers : 65,
    avgCookies   : 6.3,
    amountsofCookies0:[],
    customersPerHour:  function (minCustomers, maxCustomers) {
        this.amountsofCookies0.push(Math.floor((Math.random()*(this.maxCustomers-this.minCustomers)+this.minCustomers)) * this.avgCookies);
    },
    cookies: function () {
        let divEl = document.getElementById('listscookies');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let h2El = document.createElement('h2');
        h2El.textContent = this.nameLoc;
        articleEl.appendChild(h2El);
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < this.amountsofCookies0.length; i++) {
          let liEl = document.createElement('li');
          liEl.textContent = this.amountsofCookies0;
          ulEl.appendChild(liEl)
        }
}
}
let Tokyo = {
    nameLoc : 'Tokyo',
    minCustomers : 3,
    maxCustomers : 24,
    avgCookies   : 1.2,
    preHour: 0,
    amountsofCookies:[],
    customersPerHour:  function (minCustomers, maxCustomers) {  
        this.amountsofCookies.push(Math.floor((Math.random()*(this.maxCustomers-this.minCustomers)+this.minCustomers)) * this.avgCookies);
    },
    cookies: function () {
        let divEl = document.getElementById('listscookies');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let h2El = document.createElement('h2');
        h2El.textContent = this.nameLoc;
        articleEl.appendChild(h2El);
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < this.amountsofCookies.length; i++) {
          let liEl = document.createElement('li');
          liEl.textContent = this.amountsofCookies;
          ulEl.appendChild(liEl)
        }
}
}
let Dubai = {
    nameLoc :'Dubai',
    minCustomers : 11,
    maxCustomers : 38,
    avgCookies   : 3.7,
    amountsofCookies:[],
    customersPerHour:  function (minCustomers, maxCustomers) {  
        this.amountsofCookies.push(Math.floor((Math.random()*(this.maxCustomers-this.minCustomers)+this.minCustomers)) * this.avgCookies);
    },
    cookies: function () {
        let divEl = document.getElementById('listscookies');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let h2El = document.createElement('h2');
        h2El.textContent = this.nameLoc;
        articleEl.appendChild(h2El);
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < this.amountsofCookies.length; i++) {
          let liEl = document.createElement('li');
          liEl.textContent = this.amountsofCookies;
          ulEl.appendChild(liEl)
        }
}
}
let Paris = {
    nameLoc :'Paris',
    minCustomers : 20,
    maxCustomers : 38,
    avgCookies   : 2.3,
    amountsofCookies:[],
    customersPerHour:  function (minCustomers, maxCustomers) {  
        this.amountsofCookies.push(Math.floor((Math.random()*(this.maxCustomers-this.minCustomers)+this.minCustomers)) * this.avgCookies);
    },
    cookies: function () {
        let divEl = document.getElementById('listscookies');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let h2El = document.createElement('h2');
        h2El.textContent = this.nameLoc;
        articleEl.appendChild(h2El);
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < this.amountsofCookies.length; i++) {
          let liEl = document.createElement('li');
          liEl.textContent = this.amountsofCookies;
          ulEl.appendChild(liEl)
        }
}
}
let Lima = {
    nameLoc :'Lima',
    minCustomers : 2,
    maxCustomers : 16,
    avgCookies   : 4.6,
    amountsofCookies:[],
    customersPerHour:  function (minCustomers, maxCustomers) {  
        this.amountsofCookies.push(Math.floor((Math.random()*(this.maxCustomers-this.minCustomers)+this.minCustomers)) * this.avgCookies);
    },
    cookies: function () {
        let divEl = document.getElementById('listscookies');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let h2El = document.createElement('h2');
        h2El.textContent = this.nameLoc;
        articleEl.appendChild(h2El);
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < this.amountsofCookies.length; i++) {
          let liEl = document.createElement('li');
          liEl.textContent = this.amountsofCookies;
          ulEl.appendChild(liEl)
        }
}
}
for(let i=0;i<10;i++){
    seattle.customersPerHour(this.minCustomers,this.maxCustomers);
}
seattle.cookies();
for(let i=0;i<10;i++){
Tokyo.customersPerHour(this.minCustomers,this.maxCustomers);
}
Tokyo.cookies();
for(let i=0;i<10;i++){
Dubai.customersPerHour(this.minCustomers,this.maxCustomers);
}
Dubai.cookies();
for(let i=0;i<10;i++){
Paris.customersPerHour(this.minCustomers,this.maxCustomers);
}
Paris.cookies();
for(let i=0;i<10;i++){
Lima.customersPerHour(this.minCustomers,this.maxCustomers);
}
Lima.cookies();