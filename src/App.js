import './App.css';
import Hero from './Hero.js'
import Footer from './Footer.js'
import Radisson from "./Agra/RadissonBlue.js"
import Le from "./Agra/lemeridian.js"
import Vivanta from "./Agra/vivanta.js"
import Card from './card-ui'
import Navbar from './Navbar.js';
import PersonalInfo from './Form.js'
import { BrowserRouter as Router,Switch} from "react-router-dom";
import Jaipur from "./Jaipur/Navbar1.js";
import Agra from "./Agra/Navbar1.js";
import AgraHotel from "./Agra/HotelAgra.js";
import Route from 'react-router-dom/Route';
import Kochi from "./Kochi/Navbar1.js";
import Ladakh from "./Ladakh/Navbar1.js";
import NewDelhi from "./NewDelhi/Navbar1.js";
import Shimla from "./Shimla/Navbar1.js";
import Goa from "./Goa/Navbar1.js";
import Hyderabad from "./Hyderabad/Navbar1.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Home.js';
import GINGERGoaPanjim from "./Goa/GINGER Goa Panjim.js"
import ResorteMarinhaDourada from "./Goa/Resorte Marinha Dourada.js"
import TheSeaHorseResort from "./Goa/The Sea Horse Resort.js"

import LemonTreePremierHitec from "./Hyderabad/Lemon Tree Premier Hitec.js"
import RadissonBluPlaza from "./Hyderabad/Radisson Blu Plaza.js"
import Novotel from "./Hyderabad/Novotel  .js"

function App() {
  return (
  <div className="App">
     <Navbar/>
     <Router>
     <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/card" component={Card}/>
        <Route exact path="/hero" component={Hero}/>
        <Route exact path="/form" component={PersonalInfo}/>
        <Route exact path="/footer" component={Footer}/>
        <Route exact path="/navbar" component={Navbar}/>
        <Route exact path="/jaipur" component={Jaipur}/>
        <Route exact path="/agra" component={Agra}/>
        <Route exact path="/radisson" component={Radisson}/>
        <Route exact path="/lemeridian" component={Le}/>
        <Route exact path="/vivanta" component={Vivanta}/>
        <Route exact path="/agra_hotel" component={AgraHotel}/>
        <Route exact path="/kochi" component={Kochi}/>
        <Route exact path="/ladakh" component={Ladakh}/>
        <Route exact path="/newDelhi" component={NewDelhi}/>
        <Route exact path="/shimla" component={Shimla}/>
        <Route exact path="/goa" component={Goa}/>
        <Route exact path="/hyderabad" component={Hyderabad}/>

        <Route exact path="/gINGERGoaPanjim" component={GINGERGoaPanjim}/>
        <Route exact path="/resorteMarinhaDourada" component={ResorteMarinhaDourada}/>
        <Route exact path="/theSeaHorseResort" component={TheSeaHorseResort}/>
        
        <Route exact path="/lemonTreePremierHitec" component={LemonTreePremierHitec}/>
        <Route exact path="/radissonBluPlaza" component={RadissonBluPlaza}/>
        <Route exact path="/novotel" component={Novotel}/>
        
 
 
 

 
        </Switch>
        </Router>
        <Footer/>
    </div>
);
}

export default App;
