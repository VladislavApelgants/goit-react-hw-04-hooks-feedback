import { v4 as uuidv4 } from 'uuid';
import s from './FeedbackOptions.module.scss';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(elem => (
        <button
          key={uuidv4()}
          type="button"
          className={s.button}
          onClick={onLeaveFeedback}
          name={elem}
        >
          {elem}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
