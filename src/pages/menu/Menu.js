import React from 'react';
import {NavLink} from "react-router-dom";

function Menu(props) {
    return (
        <ul className='menu'>
            <li>
                <NavLink
                    to="/"
                    className={({isActive}) => isActive && 'active'}
                >posts</NavLink>
            </li>
            <li>
                <NavLink
                    to="/two"
                    className={({isActive}) => isActive && 'active'}
                >page_2</NavLink>
            </li>
            <li>
                <NavLink
                    to="/three"
                    className={({isActive}) => isActive && 'active'}
                >page_3</NavLink>
            </li>
            <li>
                <NavLink
                    to="/four"
                    className={({isActive}) => isActive && 'active'}
                >page_4</NavLink>
            </li>
            <li>
                <NavLink
                    to="/five"
                    className={({isActive}) => isActive && 'active'}
                >page_5</NavLink>
            </li>
        </ul>
    );
}

export default Menu;