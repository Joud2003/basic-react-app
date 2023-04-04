import classes from './Card.module.css';

function Card(props){
    return <div className={classes.card}>
        {props.children}
    </div>
}
//children always holds the content that is wrapped between <Card></Card>
export default Card;