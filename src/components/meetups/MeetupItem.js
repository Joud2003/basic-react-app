import { useContext } from "react"; //allows us to establish a connection between this component and the context

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  const favoriteCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    //need to find out whether it's part of the context or not
    if(itemIsFavorite){
        favoriteCtx.removeFavorite(props.id);
    }
    else{
        favoriteCtx.addFavorite({
            id: props.id,
            title: props.title,
            description: props.desc,
            image: props.image,
            address: props.address,
        });
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
        </div>
      </Card>
    </li>
  );
}
//card wraps the content
export default MeetupItem;
