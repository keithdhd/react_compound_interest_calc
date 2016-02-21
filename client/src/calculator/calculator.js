function Calculator(){
  this.currentPrincipal = 0;
  this.monthlyContributions = 0;
  this.yearsToGrow = 0;
  this.interestRate = 0;
  this.compoundedPerYear = 12;
  this.futureValue = 0;
}

Calculator.prototype = {

  setPrincipal: function(principal){
    this.currentPrincipal = principal;
  },

  setMonthlyContributions: function(monthlyContribs){
    this.monthlyContributions = monthlyContribs;
  },

  setYearsToGrow: function(years){
    this.yearsToGrow = years;
  },

  setInterestRate: function(interest){
    this.interestRate = interest;
  },

  compoundInterestForPrincipal: function(){
   var base = (1 + ((this.interestRate/100) / this.compoundedPerYear));
   var exponent =  this.compoundedPerYear * this.yearsToGrow;
   var result = this.currentPrincipal * Math.pow(base, exponent);
   this.futureValue = result.toFixed(2, 10);
  }

}

module.exports = Calculator;