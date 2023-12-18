var customerName = "bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer() {
     bestCustomer = 'not bob';
     return bestCustomer;
}

function overwriteBestCustomer() {
     bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'peeps';

function changeLeastFavoriteCustomer(name) {
    leastFavoriteCustomer = name;
}
