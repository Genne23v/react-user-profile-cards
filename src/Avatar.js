import './Avatar.css';

function Avatar({ imgUrl, name }) {
    return (
        <img
            width='128'
            height='128'
            className='profile-avatar'
            alt={name}
            title={name}
            src={imgUrl}
        />
    );
}

export default Avatar;
