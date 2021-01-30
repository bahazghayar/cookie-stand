'use strict';

var workingHours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

var locations = [];
var grandTotalSum = 0;

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function CookiesShops(shopName, minCustPerHour, maxCustPerHour, avgCookiesPerSale) {
  this.shopName = shopName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;
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
    this.totalCookies += this.cookiesPerHour[i];
    grandTotalSum += this.cookiesPerHour[i] ; 
  }
};

//  function for body 
CookiesShops.prototype.render = function () {
  
  var tableRow = document.createElement('tr');
  tableBody.appendChild(tableRow);

  var thLocationName = document.createElement('th');
  thLocationName.textContent = this.shopName;
  tableRow.appendChild(thLocationName)
  
  var dataCell; 
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    dataCell = document.createElement('td');
    dataCell.textContent = this.cookiesPerHour[i];
    tableRow.appendChild(dataCell);
  }

  var dailyLocationTotal = document.createElement('th');
  dailyLocationTotal.textContent = this.totalCookies;
  tableRow.appendChild(dailyLocationTotal);
};

// creating objects: 
var seattle = new CookiesShops('seattle', 23, 65, 6.3);
var tokyo = new CookiesShops('tokyo', 3, 24, 1.2);
var dubai = new CookiesShops('dubai', 11, 38, 3.7);
var paris = new CookiesShops('paris', 20, 38, 2.3);
var lima = new CookiesShops('lima', 2, 16, 4.6);


// page rendering: 
var mainPage  = document.getElementById('mainId');
var locationSection = document.createElement('section')  ; 
mainPage.appendChild(locationSection) ; 

var locationTable = document.createElement('table');
locationSection.appendChild(locationTable) ; 

// form rendering:
var newSection = document.createElement('section');
mainPage.appendChild(newSection) ; 
 
var form = document.getElementById('formSection') ; 
newSection.appendChild(form) ; 

header();
cellData(); 



//  function for header 
function header() {
  var headerRow = document.createElement('thead') ; 
  locationTable.appendChild(headerRow) ; 

  var tableRow = document.createElement('tr');
  headerRow.appendChild(tableRow);

  var emptyCell = document.createElement('th');
  tableRow.appendChild(emptyCell) ; 
  
  var headerRowCells ; 
  for (var i = 0; i < workingHours.length  ; i++) {
    headerRowCells = document.createElement('th');
    headerRowCells.textContent = workingHours[i];
    tableRow.appendChild(headerRowCells);
  }
  var totalHeaderRow = document.createElement('th');
  totalHeaderRow.textContent = ' Daily Location Total';
  tableRow.appendChild(totalHeaderRow);
}

// Body
var tableBody;
function cellData() {
    tableBody = document.createElement('tbody');
    locationTable.appendChild(tableBody);
}

//  function for footer 
function footer() {
  var footerRow =document.createElement('tfoot') ; 
  locationTable.appendChild(footerRow) ;

  var tableRow = document.createElement('tr');
  footerRow.appendChild(tableRow);

  var footerRowCells = document.createElement('th');
  footerRowCells.textContent = 'Totals';
  tableRow.appendChild(footerRowCells);

  var sumPerHour = [];
  var columnSum = 0;
  for (var i = 0; i < workingHours.length; i++) {
    var hourCol = 0
    for (var j = 0; j < locations.length; j++) {
      hourCol += locations[j].cookiesPerHour[i] ; 
    }
    sumPerHour.push(hourCol);
    columnSum += hourCol;
    footerRowCells = document.createElement('th');
    footerRowCells.textContent = sumPerHour[i];
    tableRow.appendChild(footerRowCells);
  }

  var grandTotal = document.createElement('th') ;
  grandTotal.textContent = grandTotalSum;
  // grandTotal.setAttribute ("id","grandTotal") ; 
  tableRow.appendChild(grandTotal);
  
}

// calling : 
for (var i = 0; i < locations.length; i++) {
  
  locations[i].calculateCustomersPerHour();
  locations[i].calculateCookiesPerHour();
  locations[i].render();
}
footer();



form = addEventListener('submit', submitter);

function submitter(event) {
  event.preventDefault();
  
  var shopName = event.target.shopName.value;
  var minCustPerHour =  parseInt  (event.target.minCustPerHour.value);
  var maxCustPerHour =  parseInt (event.target.maxCustPerHour.value);
  var avgCookiesPerSale = (event.target.avgCookiesPerSale.value);

  new CookiesShops(shopName, minCustPerHour, maxCustPerHour, avgCookiesPerSale);

  locationTable.innerHTML= '' ; 
  grandTotalSum=0;

 header();
 cellData() ; 
  
  for (var i=0; i< locations.length ; i++) {
       
      
       locations[i].totalCookies=0;
      
       locations[i].cookiesPerHour=[] ; 
       locations[i].calculateCustomersPerHour ()  ;  
       locations[i].calculateCookiesPerHour () ; 
       locations[i].render() ;   
  }
  footer();
}


