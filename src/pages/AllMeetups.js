import { useState, useEffect } from 'react';
//useEffect is used to define conditions when the code is run
import MeetupList from "../components/meetups/MeetupList";


function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true); //start at loading state
    //want to send a request to get data whenever the All meetups page is rendered
    const [loadedMeetups, setLoadedMeetups] = useState([]); 

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://myapp-dc2a1-default-rtdb.firebaseio.com/meetups.json'
        ).then((response) =>{
            return response.json()
        }).then((data) => {
            const meetups = [];

            for(const key in data){
                const meetup = {
                    id: key,
                    ...data[key] //accessing the nested object for the given key
                                //and use the spread operator to copy all nested pairs to the meetup object
                };
                meetups.push(meetup);
            }
            
            setIsLoading(false); //set to false when we're no longer loading
            setLoadedMeetups(meetups);
        }); 
    }, []); //first arg is a functions, the second is an array of dependencies
    //need the second arg to avoid infinite loop
    //if 2nd arg is left empty, it only executes when the block is rendered the first time
    //add all external value the fetch func depends on in 2nd arg for ex if we use props (external dep) then it should be addded
    
    //used as a page is loaded
    if(isLoading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }
  return ( 
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
