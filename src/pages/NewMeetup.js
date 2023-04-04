import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  //used as a page loaded
  const navigate = useNavigate();

  function onAddMeetupHandler(meetupData) {
    fetch("https://myapp-dc2a1-default-rtdb.firebaseio.com/meetups.json",
    {
      method: "POST",
      body: JSON.stringify(meetupData), //need to jsonify
      headers: {
        "Content-Type": "application/json",
      },
    }
    ).then(() => {
        navigate('/', {replace: true}); //navigate.push can be used for the back button
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
