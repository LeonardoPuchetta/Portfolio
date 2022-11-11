
import './Styles/App.scss';
import {
  BrowserRouter as Router,
  Route,
  Routes 
} from "react-router-dom";
import routes from './config/routes' 


function App() {
  return (
    <Router>
          <Routes>
            {routes.map((route,index) => (
                  <Route  key={index} 
                          path={route.path}
                          element={ <route.layout>
                                    <route.component/>
                                    </route.layout>}
                            />
            ))}
          </Routes>
    </Router>
  );
}

export default App;
