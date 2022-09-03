import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import config from '~/config';
import * as userService from '~/services/userService';
import Menu, { MenuItem } from './Menu';
import {
  HomeIcon,
  UserGroupIcon,
  LiveIcon,
  HomeActiveIcon,
  UserGroupActiveIcon,
  LiveActiveIcon,
} from '~/components/Icons/Icons';
import styles from './Sidebar.module.scss';
import SuggestedAccounts from '~/components/SuggestedAccounts';
const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const INIT_PER_PAGE = 5;

function Sidebar() {
  const [suggestedUser, setSuggestedUser] = useState([]);
  const [pageSuggested, setPageSuggested] = useState(INIT_PAGE);

  const [followingList, setFollowingList] = useState([]);
  const [pageFollowing, setPageFollowing] = useState(INIT_PAGE);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await userService.getSuggested({ pageSuggested, INIT_PER_PAGE });
      setSuggestedUser((prevUser) => [...prevUser, ...result]);
    };
    fetchApi();
  }, [pageSuggested]);

  const handleSeeAllSuggested = () => {
    setPageSuggested(pageSuggested + 1);
  };

  useEffect(() => {
    const fetchApi = async () => {
      const result = await userService.getFollowings({ pageFollowing });
      setFollowingList((prevUser) => [...prevUser, ...result]);
    };
    fetchApi();
  }, [pageFollowing]);

  const handleSeeAllFollowing = () => {
    setPageFollowing(pageFollowing + 1);
  };

  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>

      <SuggestedAccounts label="Suggested accounts" data={suggestedUser} onViewChange={handleSeeAllSuggested} />
      <SuggestedAccounts label="Following accounts" data={followingList} onViewChange={handleSeeAllFollowing} />
    </aside>
  );
}

export default Sidebar;
