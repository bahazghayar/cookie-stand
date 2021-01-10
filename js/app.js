'use strict';

var workingHours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm '];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var seattle = {
  city: 'seattle',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerSale: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  total: 0,
  calculateCustomersPerHour: function () {
    for (var i = 0; i < workingHours.length; i++) {
      this.customersPerHour.push(random(this.minCustPerHour, this.maxCustPerHour));
      // console.log(this.customersPerHour[i]);
    }
    console.log(this.customersPerHour);
    return this.customersPerHour;
  },
  calculateCookiesPerHour: function () {
    for (var i = 0; i < workingHours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiesPerSale));
      this.total += this.cookiesPerHour[i];
      // console.log(this.cookiesPerHour[i]) ; 
      // console.log(this.total) ; 
    }
    console.log(this.cookiesPerHour);
    console.log(this.total);
    return this.cookiesPerHour, this.total;
  },
}


var tokyo = {
  city: 'tokyo',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerSale: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  total: 0,
  calculateCustomersPerHour: function () {
    for (var i = 0; i < workingHours.length; i++) {
      this.customersPerHour.push(random(this.minCustPerHour, this.maxCustPerHour));
      // console.log(this.customersPerHour[i]);
    }
    console.log(this.customersPerHour);
    return this.customersPerHour;
  },
  calculateCookiesPerHour: function () {
    for (var i = 0; i < workingHours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiesPerSale));
      this.total += this.cookiesPerHour[i];
      // console.log(this.cookiesPerHour[i]) ; 
      // console.log(this.total) ; 
    }
    console.log(this.cookiesPerHour);
    console.log(this.total);
    return this.cookiesPerHour, this.total;
  },
}

var dubai = {
  city: 'dubai',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerSale: 3.7,
  customersPerHour: [],
  cookiesPerHour: [],
  total: 0,
  calculateCustomersPerHour: function () {
    for (var i = 0; i < workingHours.length; i++) {
      this.customersPerHour.push(random(this.minCustPerHour, this.maxCustPerHour));
      // console.log(this.customersPerHour[i]);
    }
    console.log(this.customersPerHour);
    return this.customersPerHour;
  },
  calculateCookiesPerHour: function () {
    for (var i = 0; i < workingHours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiesPerSale));
      this.total += this.cookiesPerHour[i];
      // console.log(this.cookiesPerHour[i]) ; 
      // console.log(this.total) ; 
    }
    console.log(this.cookiesPerHour);
    console.log(this.total);
    return this.cookiesPerHour, this.total;
  },
}

var paris = {
  city: 'paris',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerSale: 2.3,
  customersPerHour: [],
  cookiesPerHour: [],
  total: 0,
  calculateCustomersPerHour: function () {
    for (var i = 0; i < workingHours.length; i++) {
      this.customersPerHour.push(random(this.minCustPerHour, this.maxCustPerHour));
      // console.log(this.customersPerHour[i]);
    }
    console.log(this.customersPerHour);
    return this.customersPerHour;
  },
  calculateCookiesPerHour: function () {
    for (var i = 0; i < workingHours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiesPerSale));
      this.total += this.cookiesPerHour[i];
      // console.log(this.cookiesPerHour[i]) ; 
      // console.log(this.total) ; 
    }
    console.log(this.cookiesPerHour);
    console.log(this.total);
    return this.cookiesPerHour, this.total;
  },
}

var lima = {
  city: 'lima',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerSale: 4.6,
  customersPerHour: [],
  cookiesPerHour: [],
  total: 0,
  calculateCustomersPerHour: function () {
    for (var i = 0; i < workingHours.length; i++) {
      this.customersPerHour.push(random(this.minCustPerHour, this.maxCustPerHour));
      // console.log(this.customersPerHour[i]);
    }
    console.log(this.customersPerHour);
    return this.customersPerHour;
  },
  calculateCookiesPerHour: function () {
    for (var i = 0; i < workingHours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiesPerSale));
      this.total += this.cookiesPerHour[i];
      // console.log(this.cookiesPerHour[i]) ; 
      // console.log(this.total) ; 
    }
    console.log(this.cookiesPerHour);
    console.log(this.total);
    return this.cookiesPerHour, this.total;
  },
}


var city = [seattle, tokyo, dubai, paris, lima];

for (var j = 0; j < city.length; j++) {

  city[j].calculateCustomersPerHour();
  city[j].calculateCookiesPerHour();
  var parent = document.getElementById('main');
  var cityName = document.createElement('h2');
  cityName.textContent = city[j].city;
  parent.appendChild(cityName);

  var cityPerHour = document.createElement('ul');
  parent.appendChild(cityPerHour);

  for (var k = 0; k < workingHours.length+1; k++) {
    var list = document.createElement('li');
    list.textContent = workingHours[k] + ': ' + city[j].cookiesPerHour[k] + ' cookies';
    cityPerHour.appendChild(list);
  }
  list.textContent = ('total: ' + city[j].total);
}
