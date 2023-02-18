import PropTypes from 'prop-types';
import css from "components/friendList/FriendList.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <>
            <span className={isOnline ? css.isOnline : css.isOffline}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </>
    );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
