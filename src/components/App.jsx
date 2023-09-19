import React, { Component } from "react";

import { Statistics } from "./Statiscs/Statistic";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () =>{
const {good, neutral,bad} = this.state
const totalFeedback = good+neutral+bad
return totalFeedback
  }

  render(){
    return(
      <div>
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.state.good}></Statistics>
      </div>
    )
  }
};
