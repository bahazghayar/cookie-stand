'use strict';

var workingHours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function CookiesShops(city, minCustPerHour, maxCustPerHour, avgCookiesPerSale) {
  this.city = city;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.total = 0;
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
  }
  console.log(this.cookiesPerHour);
  console.log(this.total);
};

// Create and append table
var mainDiv = document.getElementById('salesTable');
var shopTable = document.createElement('table');
mainDiv.appendChild(shopTable);

//  function for header 
function firstRow() {
  var firstRow = document.createElement('tr');
  shopTable.appendChild(firstRow);

  var headerRow = document.createElement('th');
  headerRow.textContent = "    ";
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
seattle.render();

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

tokyo.render();
dubai.render();
paris.render();
lima.render();

// var city = [seattle, tokyo, dubai, paris, lima];

// for (var j = 0; j < city.length; j++) {
//   city[j].calculateCustomersPerHour();
//   city[j].calculateCookiesPerHour();
//   var mainID = document.getElementById('main');
//   var cityName = document.createElement('h2');
//   cityName.textContent = city[j].city;
//   mainID.appendChild(cityName);

//   var cityPerHour = document.createElement('ul');
//   mainID.appendChild(cityPerHour);

//   for (var k = 0; k < workingHours.length+1; k++) {
//     var list = document.createElement('li');
//     list.textContent = workingHours[k] + ': ' + city[j].cookiesPerHour[k] + ' cookies';
//     cityPerHour.appendChild(list);
//   }
//   list.textContent = ('total: ' + city[j].total);
// }
 

function hourlySum ( ) {
  var totalPerHour = [] ; 
  var sumPerHour = 0 ;
  var hour=[] ; 
      for (var i=0 ; i < workingHours.length ; i++ ) {
         
         sumPerHour = sumPerHour+ hour[i] ; 

          totalPerHour.push(sumPerHour) ;

      }
}
hourlySum() ; 
//  function for footer 
function lastRow() {

  var lastRow = document.createElement('tr');
  shopTable.appendChild(lastRow);

  var footerRow = document.createElement('th');
  footerRow.textContent = 'Totals';
  lastRow.appendChild(footerRow);
  
  for (var i=0 ; i<workingHours.length ; i++ )
  var totalsPerHour = document.createElement ('td')
  totalsPerHour.textContent = totalPerHour[i] ; 
  lastRow.appendChild (totalsPerHour) ; 
          
}
lastRow();


// var sumValue = 0 ; 
  // for (var i=1 ; i < workingHours.length ; i++ ) {
  //     sumValue += parseInt(shopTable.rows[i] ); 
  // }
  // console.log(sumValue) ;
    
  // for (i=0 ; i<workingHours.length ; i++ ) {
  // var footerRow = document.createElement('th');
  //     footerRow.textContent = this.sumValue[i];
  //     lastRow.appendChild(footerRow);
  // }

  // for (var i = 0; i < workingHours.length; i++) {
  //   var footerRow = document.createElement('th');
  //   footerRow.textContent = this.total[i];
  //   lastRow.appendChild(footerRow);
  // }
  // var totalDaily = 0 ; 
  // for (var i=0 ; i<workingHours.length ; i++ ){
  //     totalDaily += this.total[i]  ; 
  // }

  // var footerRow = document.createElement('th');
  // footerRow.textContent = totalDaily;
  // lastRow.appendChild(footerRow);

