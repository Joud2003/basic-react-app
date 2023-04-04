import { Link } from 'react-router-dom';
import { useContext } from 'react';

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';
//we're importing javascript objects where all css classes defined will be props of the object
//all class names are unique per component
function MainNavigation(){
    const favoriteCtx = useContext(FavoritesContext);

    return (
    <header className={classes.header}>
        <div className={classes.logo}> 
            React Meetups
        </div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>Add New Meetup</Link>
                </li>
                <li>
                    <Link to='/favorites'>My Favorites
                    <span className={classes.badge}>{favoriteCtx.totalFavorites}</span></Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}
//if we use <a href="" />, each time we click it, we send a request (don't want to)
//instead, we use Link from react-router-dom so we stay on this already loaded page and don't send a request
export default MainNavigation;
