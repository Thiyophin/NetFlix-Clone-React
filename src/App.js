import Navbar from './Components/Navbar/Navbar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPosts from './Components/RowPosts/RowPosts';
import {action,originals,upcoming} from './urls'
function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <RowPosts url={originals} title="Netflix Originals"/>
     <RowPosts url={upcoming} title="Upcoming movies" isSmall/>
     <RowPosts url={action} title="Action movies" isSmall/>
    </div>
  );
}

export default App;
