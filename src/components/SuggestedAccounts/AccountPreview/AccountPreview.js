import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './AccountPreview.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview({ previewUser = {} }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Image className={cx('avatar')} src={previewUser.avatar} alt={previewUser.avatar} />
        <Button primary>Follow</Button>
      </div>

      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>{previewUser.nickname}</strong>
          {previewUser.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </p>
        <p className={cx('name')}>
          {previewUser.first_name} {previewUser.last_name}
        </p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>{previewUser.followers_count}</strong>
          <span className={cx('label')}>Followers</span>
          <strong className={cx('value')}>{previewUser.likes_count}</strong>
          <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  );
}

AccountPreview.propTypes = {
  previewUser: PropTypes.object,
};

export default AccountPreview;
