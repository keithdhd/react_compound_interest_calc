var Calculator = require('../calculator');
var assert = require('assert');

describe('Calculator', function(){
  it('Should start with currentPrinciple of 0', function(){
    var calculator = new Calculator();
    assert.equal(0, calculator.currentPrinciple);
  });

  it('Should start with monthlyContributions of 0', function(){
    var calculator = new Calculator();
    assert.equal(0, calculator.monthlyContributions);
  });

  it('Should start with yearsToGrow of 0', function(){
    var calculator = new Calculator();
    assert.equal(0, calculator.yearsToGrow);
  });

  it('Should start with interestRate of 0', function(){
    var calculator = new Calculator();
    assert.equal(0, calculator.interestRate);
  });

  it('Should start with futureValue of 0', function(){
    var calculator = new Calculator();
    assert.equal(0, calculator.futureValue);
  });  

  ////////////////////////////////////////////////////

  it('Should set current principle to 45000', function(){
    var calculator = new Calculator();
    calculator.setPrinciple(45000);
    assert.equal(45000, calculator.currentPrinciple);
  }); 

  it('Should set monthlyContributions to 1000', function(){
    var calculator = new Calculator();
    calculator.setMonthlyContributions(1000);
    assert.equal(1000, calculator.monthlyContributions);
  }); 

  it('Should set yearsToGrow to 10.5', function(){
    var calculator = new Calculator();
    calculator.setYearsToGrow(10.5);
    assert.equal(10.5, calculator.yearsToGrow);
  });  

  it('Should set interest to 5.25', function(){
    var calculator = new Calculator();
    calculator.setInterestRate(5.25);
    assert.equal(5.25, calculator.interestRate);
  });  

  /////////////////////////////////////////////////////
  it('Should show a future value of 8235.05 given principle of 5,000.00, monthly contribs of 1000 and 5% interest', function(){
    var calculator = new Calculator();

    calculator.setPrinciple(5000);
    calculator.setYearsToGrow(10);
    calculator.setInterestRate(5);
    calculator.compoundInterestForPrincipal();
    assert.equal(8235.05, calculator.futureValue);
  }); 

  it('Should show a future value of 80070.13 given principle of 45000, 11 years to grow and 5.25% interest', function(){
    var calculator = new Calculator();

    calculator.setPrinciple(45000);
    calculator.setYearsToGrow(11);
    calculator.setInterestRate(5.25);
    calculator.compoundInterestForPrincipal();
    assert.equal(80070.13, calculator.futureValue);
  }); 

  // it('Should show a future value of 89,155.71 given principle of 45,000.00, monthly contribs of 1000 and 5.25% interest', function(){
  //   var calculator = Object.create(Calculator.prototype);
  //   calculator.setPrinciple(45000);
  //   calculator.setMonthlyContributions(1000);
  //   calculator.setYearsToGrow(10);
  //   calculator.setInterestRate(5.25);
  //   calculator.calculateFutureValue();
  //   assert.equal(89155.71, calculator.futureValue);
  // }); 




























})