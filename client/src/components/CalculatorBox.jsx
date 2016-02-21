var React = require('react');
var Calculator = require('../calculator/calculator');

var CalculatorBox = React.createClass({

  calculate: function(e){
    e.preventDefault();
    this.state.compoundInterestForPrincipal();
    console.log(this.state);
    this.forceUpdate();
  },

  getInitialState: function(){
    return new Calculator();
  },

  setPrincipal: function(e){
    this.state.setPrincipal(e.target.value);
    this.state.compoundInterestForPrincipal();
    this.state.niceFutureValue();
    this.forceUpdate();
  },

  setMonthlyContributions: function(e){
    this.state.setMonthlyContributions(e.target.value);
    this.state.compoundInterestForPrincipal();
    this.state.niceFutureValue();
    this.forceUpdate();
  },

  setYearsToGrow: function(e){
    this.state.setYearsToGrow(e.target.value);
    this.state.compoundInterestForPrincipal();
    this.state.niceFutureValue();
    this.forceUpdate();
  },

  setInterestRate: function(e){
    this.state.setInterestRate(e.target.value);
    this.state.compoundInterestForPrincipal();
    this.state.niceFutureValue();
    this.forceUpdate();
  },

  render: function(){
    return(
      <form>
        <label htmlFor="principal">Principal: </label>
        <input type="text" id="currentPrincipal" onChange={this.setPrincipal}/>

        <label htmlFor="monthlyAddition">Monthly Addition: </label>
        <input type="text" id="monthlyAddition" onChange={this.setMonthlyContributions}/>

        <label htmlFor="yearsToGrow">Years To Grow: </label>
        <input type="text" id="yearsToGrow" onChange={this.setYearsToGrow}/>

        <label htmlFor="interestRate">Interest Rate: </label>
        <input type="text" id="interestRate" onChange={this.setInterestRate}/>

        <button type="submit" onClick={this.calculate}>Calculate</button>

        <div>Future Value: <b>{this.state.futureValue}</b></div>
      </form>

    );
  }
});

module.exports = CalculatorBox;