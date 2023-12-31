import React, { Component } from 'react';

import { Statistics } from './Statiscs/Statistic';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = event => {
    this.setState(prevState=>{
      return {[event.target.name]: prevState[event.target.name] + 1};
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage =()=> {
    const { good } = this.state;
    const feedbackParcentage = (good * 100 / this.countTotalFeedback()).toFixed(2);
    return feedbackParcentage;
  }

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ?
          (<Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />) : <Notification message="There is no feedback"/>}
        </Section>
        
      </div>
    );
  }
}
