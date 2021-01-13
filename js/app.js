'use strict';

var workingHours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var locations = [];
var shopTable ; 

function CookiesShops(city, minCustPerHour, maxCustPerHour, avgCookiesPerSale) {
  this.city = city;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.total = 0;
  locations.push(this);
}

CookiesShops.prototype.calculateCustomersPerHour = function () {
  for (var i = 0; i < workingHours.length; i++) {
    this.customersPerHour.push(random(this.minCustPerHour, this.maxCustPerHour));
  }
};


CookiesShops.prototype.calculateCookiesPerHour = function () {
  for (var i = 0; i < workingHours.length; i++) {
    this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiesPerSale));
    this.total += this.cookiesPerHour[i];
    grandTotalSum += this.cookiesPerHour[i] ; 
  }
};

// Create and append table
function createTable ( ) {

  var mainDiv = document.getElementById('salesTable');
  shopTable = document.createElement('table');
  mainDiv.appendChild(shopTable);
}
createTable();

//  function for header 
function firstRow() {
  var firstRow = document.createElement('tr');
  shopTable.appendChild(firstRow);

  var headerRow = document.createElement('th');
  // headerRow.textContent = "    ";
  firstRow.appendChild(headerRow);
  for (var i = 0; i < workingHours.length; i++) {
    var headerRow = document.createElement('th');
    headerRow.textContent = workingHours[i];
    firstRow.appendChild(headerRow);
  }
  var headerRow = document.createElement('th');
  headerRow.textContent = ' Daily Location Total';
  firstRow.appendChild(headerRow);
}
firstRow();


//  function for body 
CookiesShops.prototype.render = function () {
  this.calculateCookiesPerHour();
  
  var trLocationName = document.createElement('tr');
  shopTable.appendChild(trLocationName);

  var tdLocationName = document.createElement('td');
  tdLocationName.textContent = this.city;
  trLocationName.appendChild(tdLocationName)

  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    var tdCookiesPerHour = document.createElement('td');
    tdCookiesPerHour.textContent = this.cookiesPerHour[i];
    trLocationName.appendChild(tdCookiesPerHour);
  }
  
  var tdTotal = document.createElement('td');
  tdTotal.textContent = this.total;
  trLocationName.appendChild(tdTotal);
};


var seattle = new CookiesShops('seattle', 23, 65, 6.3);
seattle.calculateCustomersPerHour();
// seattle.calculateCookiesPerHour();

var tokyo = new CookiesShops('tokyo', 3, 24, 1.2);
tokyo.calculateCustomersPerHour();
// tokyo.calculateCookiesPerHour();

var dubai = new CookiesShops('dubai', 11, 38, 3.7);
dubai.calculateCustomersPerHour();
// dubai.calculateCookiesPerHour();

var paris = new CookiesShops('paris', 20, 38, 2.3);
paris.calculateCustomersPerHour();
// paris.calculateCookiesPerHour();

var lima = new CookiesShops('lima', 2, 16, 4.6);
lima.calculateCustomersPerHour();
// lima.calculateCookiesPerHour();


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();


var sumPerHour = [];
var holdColumnSum = [];
function hourlySum() {
  for (var i = 0; i < workingHours.length; i++) {
    var totalA = 0
    for (var j = 0; j < locations.length; j++) {
      totalA += locations[j].cookiesPerHour[i]
          
    }
    sumPerHour.push(totalA);
    holdColumnSum.push(totalA);
  }
}
hourlySum();


var grandTotalSum = 0;
function grandSum() {
  for (var i = 0; i < workingHours.length; i++) {
    grandTotalSum += holdColumnSum[i];
  }
}
grandSum();

//  function for footer 
function lastRow() {
  var lastRow = document.createElement('tr');
  shopTable.appendChild(lastRow);

  var footerRow = document.createElement('th');
  footerRow.textContent = 'Totals';
  lastRow.appendChild(footerRow);

  for (var i = 0; i < workingHours.length; i++) {
    var totalsPerHour = document.createElement('th');
    totalsPerHour.textContent = sumPerHour[i];
    lastRow.appendChild(totalsPerHour);
  }
  // for (var i = 0; i < workingHours.length; i++) {
  var grandTotal = document.createElement('th');
  grandTotal.textContent = grandTotalSum;
  lastRow.appendChild(grandTotal);
  // }
}
lastRow();

var storesForm = document.getElementById('storesForm');
storesForm.addEventListener('submit', submitter);

function submitter(event) {
  event.preventDefault();
  console.log(event);

  var city = event.target.storeCity.value;
  var minCustPerHour =  parseInt  (event.target.minCustPerHour.value);
  var maxCustPerHour =parseInt (event.target.maxCustPerHour.value);
  var avgCookiesPerSale = parseInt (event.target.avgCookiesPerSale.value);
  shopTable.innerHTML= '' ; 


 createTable() ; 
 firstRow();
 
 new CookiesShops(city, minCustPerHour, maxCustPerHour, avgCookiesPerSale);
  
  for (var i=0; i< locations.length ; i++) {
       locations[i].cookiesPerHour=[] ; 
       
       locations[i].calculateCustomersPerHour ()  ;  
       locations[i].calculateCookiesPerHour () ; 
       locations[i].render() ; 
       
  }
  lastRow();
}

