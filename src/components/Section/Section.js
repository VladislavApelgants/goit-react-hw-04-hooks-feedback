import { useState } from 'react';
import s from './Section.module.scss';
import PropTypes from 'prop-types';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';

function Section({ title }) {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const changeState = e => {
    const { name } = e.currentTarget;

    switch (name) {
      case 'good':
        setGood(prevGood => (prevGood += 1));
        break;
      case 'neutral':
        setNeutral(prevNeutral => (prevNeutral += 1));
        break;
      case 'bad':
        setBad(prevBad => (prevBad += 1));
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const sum = good + neutral + bad;
    return sum;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = (good / countTotalFeedback()) * 100;
    return positiveFeedbackPercentage;
  };

  return (
    <section className={s.feedback}>
      <div className={s.container}>
        <h2>Reviews widget</h2>
        <div className={s.box}>
          <p className={s.feedback__text}>{title}</p>

          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={changeState}
          />

          <p className={s.statistics__text}>Statistics</p>

          {countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={
                !countPositiveFeedbackPercentage()
                  ? 0
                  : Number(countPositiveFeedbackPercentage().toFixed(1))
              }
            />
          )}
        </div>
      </div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
