var React = require('react');
var ReactDOM = require('react-dom');
var CalculatorBox = require('./components/CalculatorBox');

window.onload = function(){

  ReactDOM.render(
    <CalculatorBox/>,
    document.getElementById('calculatorDiv')
  );

};