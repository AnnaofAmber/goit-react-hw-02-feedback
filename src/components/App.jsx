import React, { Component } from "react";

import { Statistics } from "./Statiscs/Statistic";


export class App extends Component {
  state = {
    good: 3,
    neutral: 3,
    bad: 0
  }

  countTotalFeedback = () =>{
const {good, neutral,bad} = this.state
const totalFeedback = good+neutral+bad
return totalFeedback
  }

  countPositiveFeedbackPercentage(){
    const {good} = this.state
    const feedbackParcentage = good * 100 / this.countTotalFeedback()
    return feedbackParcentage
  }

  render(){
    return(
      <div>
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics>
      </div>
    )
  }
};
