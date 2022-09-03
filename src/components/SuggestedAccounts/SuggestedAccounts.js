import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, data = [], onViewChange }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>

      {data.map((user) => (
        <AccountItem key={user.id} user={user} />
      ))}

      <p className={cx('more-btn')} onClick={onViewChange}>
        See all
      </p>
    </div>
  );
}

SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array,
  onViewChange: PropTypes.func,
  isSeeAll: PropTypes.bool,
};

export default SuggestedAccounts;
