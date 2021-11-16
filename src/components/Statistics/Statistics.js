import s from './Statistics.module.scss';
import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className={s.statistics__list}>
      <li className={s.statistics__item}>
        <span className={s.statistics__condition}>Good:</span>
        <span className={s.statistics__value}>{good}</span>
      </li>
      <li className={s.statistics__item}>
        <span className={s.statistics__condition}>Neutral:</span>
        <span className={s.statistics__value}>{neutral}</span>
      </li>
      <li className={s.statistics__item}>
        <span className={s.statistics__condition}>Bad:</span>
        <span className={s.statistics__value}>{bad}</span>
      </li>
      <li className={s.statistics__item}>
        <span className={s.statistics__condition}>Total:</span>
        <span className={s.statistics__value}>{total}</span>
      </li>
      <li className={s.statistics__item}>
        <span className={s.statistics__condition}>Positive feedback:</span>
        <span className={s.statistics__value}>{positivePercentage}%</span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
