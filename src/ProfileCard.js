import './ProfileCard.css';

import UserInfo from './UserInfo';
import Avatar from './Avatar';

function ProfileCard({ user }) {
    const id = user.id;
    const email = user.email;
    const name = `${user.first_name} ${user.last_name}`;
    const avatarUrl = user.avatar;

    return (
        <section id={`user-${id}`} className='profile-card'>
            <Avatar imgUrl={avatarUrl} name={name} />
            <UserInfo name={name} email={email} />
        </section>
    );
}

export default ProfileCard;
