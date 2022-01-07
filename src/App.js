
import './App.css';
import Banner from './Component/Banner/Banner';
import NavBar from './Component/NavBar/NavBar';
import RowPost from './Component/rowPost/RowPost';
import {Originals,Action_movie,Animation_movie} from './Urls/Urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost Urls={Originals} title="Originals" />
      <RowPost Urls={Action_movie} title="Action" isSmall />
      <RowPost Urls={Animation_movie} title="Animation" isSmall />
    </div>
  );
}

export default App;
