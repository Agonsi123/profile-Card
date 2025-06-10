import React from 'react';
import '../profilecard/ProfileCard.css';

const ProfileCard = ({name, pics, bio}) => {
  return (
    <div className='card'>
        <div className='picture'>{pics}</div>
        <div className='text'>
            <h3>{name}</h3>
            <p>{bio}</p>
        </div>
    </div>
  )
}

export default ProfileCard