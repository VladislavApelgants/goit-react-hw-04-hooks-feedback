import React, { Component } from 'react';
import s from './Section.module.scss';
import PropTypes from 'prop-types';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';

class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = e => {
    const { name } = e.currentTarget;
    this.setState(prevState => {
      return { [name]: (prevState[name] += 1) };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const sum = good + neutral + bad;
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positiveFeedbackPercentage = (good / this.countTotalFeedback()) * 100;
    return positiveFeedbackPercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { title } = this.props;

    return (
      <section className={s.feedback}>
        <div className={s.container}>
          <h2>Reviews widget</h2>
          <div className={s.box}>
            <p className={s.feedback__text}>{title}</p>

            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.changeState}
            />

            <p className={s.statistics__text}>Statistics</p>

            {this.countTotalFeedback() === 0 ? (
              <Notification message="No feedback given" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={
                  !this.countPositiveFeedbackPercentage()
                    ? 0
                    : this.countPositiveFeedbackPercentage().toFixed(1)
                }
              />
            )}
          </div>
        </div>
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
