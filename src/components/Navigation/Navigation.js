import React from 'react';
import {Link} from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import {AuthUserContext} from '../Session';
import * as ROLES from "../../constants/roles";
import './Navigation.css'

const Navigation = () => (
    <div className="container">
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? (
                    <NavigationAuth authUser={authUser}/>
                ) : (
                    <NavigationNonAuth/>
                )
            }
        </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = ({authUser}) => (
    <ul className="navigation-list">
        <li className="navigation-list-item">
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li className="navigation-list-item">
            <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li className="navigation-list-item">
            <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        {!!authUser.roles[ROLES.ADMIN] && (
            <li className="navigation-list-item">
                <Link to={ROUTES.ADMIN}>Admin</Link>
            </li>
        )}
        <li className="navigation-list-item">
            <SignOutButton/>
        </li>
    </ul>
);

const NavigationNonAuth = () => (
    <ul className="navigation-list">
        <li className="navigation-list-item">
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li className="navigation-list-item">
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
    </ul>
);

export default Navigation;
