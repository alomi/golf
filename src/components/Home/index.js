import React from 'react';

import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';

const HomePage = ({firebase}) => (
    <div>
        <h1>Home Page</h1>
        <p>Welcome, The Home Page is accessible by every signed in user.</p>
    </div>
);

const condition = authUser => !!authUser;

export default withFirebase(withAuthorization(condition)(HomePage));