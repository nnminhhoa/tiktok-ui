import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Accounts.module.scss';
import avatar1 from '~/assets/images/avatar/avatar1.jpeg';

const cx = classNames.bind(styles);

function Accounts() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src={avatar1} alt="Hoaa" />
      <div className={cx('infor')}>
        <p className={cx('name')}>
          <span>Nguyễn Văn A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>nguyenvana</span>
      </div>
    </div>
  );
}

export default Accounts;
