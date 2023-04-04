import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import { useRef } from 'react';

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descInputRef = useRef();

    function submitHandler(event){
        event.preventDefault(); //preventing the browser default allowing us to handle the submission using react
        
        const enteredTitle = titleInputRef.current.value; //current property (the input object) then, get the value of object
        //extracting what the user enters
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDesc = descInputRef.current.value;

        const meetupData={
            title: enteredTitle,
            address: enteredAddress,
            image: enteredImage,
            desc: enteredDesc,
        };

        props.onAddMeetup(meetupData);

    }
    //can use onChange to change state each time the user enters sth in text
    //or useRef to only change when the form is submitted
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="address">Meetup Description</label>
            <textarea id='description' required rows='5' ref={descInputRef}></textarea>
        </div>
        <div className={classes.actions}>
            <button>
                Submit
            </button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
