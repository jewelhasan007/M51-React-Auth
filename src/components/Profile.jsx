import React, { useContext } from 'react';
import {nameContext} from './ContextAPI';

const Profile = () => {
    const {user} = useContext(nameContext)

    return (
        <div>
            the profile
        {user && user.email}
        </div>
    );
};

export default Profile;