import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {},
}); //building a react component so should start with Capital (FavortieContext)

export function FavoritesContextProvider(props){
    const [userFavorites, setUserFavorites] = useState([]);
    
    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup); //getting the latest state snapshot in the correct order
        }); //updating the current state depending on prev state (using prev)
        //concat is like push but returns a new array
    }
    function removeFavoriteHandler(meetupId){
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId) //returning an array missing the meetup with wanted id
        });
    }

    function itemFavoriteHandler(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId); //finding out if some item matches our condition
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler, //pointing at the function to expose it to all components in the app that are interested 
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemFavoriteHandler,
    };      

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;
//both are exported because we need to interact with both objects in other components