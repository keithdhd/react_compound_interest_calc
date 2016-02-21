var React = require('react');
var Calculator = require('../calculator/calculator');

var CalculatorBox = React.createClass({

  calculate: function(e){
    e.preventDefault();
    this.state.compoundInterestForPrincipal();
    this.state.niceFutureValue();
    this.forceUpdate();
  },

  getInitialState: function(){
    return new Calculator();
  },

  handleChange: function(callback, e){
    callback.call(this.state, e.target.value);
    this.state.compoundInterestForPrincipal();
    this.state.niceFutureValue();
    this.forceUpdate();
  },

  render: function(){
    return(
      <form>
        <label htmlFor="principal">Principal: </label>
        <input type="text" 
               id="currentPrincipal" 
               onChange={this.handleChange.bind(this, this.state.setPrincipal)}/>

        <label htmlFor="monthlyAddition">Monthly Addition: </label>
        <input type="text"
               id="monthlyAddition"  
               onChange={this.handleChange.bind(this, this.state.setMonthlyContributions)}/>

        <label htmlFor="yearsToGrow">Years To Grow: </label>
        <input type="text" 
               id="yearsToGrow" 
               onChange={this.handleChange.bind(this, this.state.setYearsToGrow)}/>

        <label htmlFor="interestRate">Interest Rate: </label>
        <input type="text" 
               id="interestRate" 
               onChange={this.handleChange.bind(this, this.state.setInterestRate)}/>

        <button type="submit" onClick={this.calculate}>Calculate</button>

        <div>Future Value: <b>{this.state.futureValue}</b></div>
      </form>

    );
  }
});

module.exports = CalculatorBox;