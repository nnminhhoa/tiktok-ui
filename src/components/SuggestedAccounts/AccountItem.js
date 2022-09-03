import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import Tippy from '@tippyjs/react/headless';
import Image from '../Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

const AccountItem = ({ user = {} }) => {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview previewUser={user} />
        </PopperWrapper>
      </div>
    );
  };
  return (
    <div>
      <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
        <div className={cx('account-item')}>
          <Image className={cx('avatar')} alt={user.nickname} src={user.avatar} />

          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>{user.nickname}</strong>
              {user.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
            </p>
            <p className={cx('name')}>
              {user.first_name} {user.last_name}
            </p>
          </div>
        </div>
      </Tippy>
    </div>
  );
};

AccountItem.propTypes = {
  user: PropTypes.object,
};

export default AccountItem;
