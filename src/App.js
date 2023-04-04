import {
  Route,
  Routes
} from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";
function App() {
  return (
      <Layout> 
        <Routes>
          <Route path="/" exact element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Layout>
  );
}
//using Routes allows to only show the specific url not that and the /url output
//adding the exact tells react to check the whole route not only the first character
export default App;
