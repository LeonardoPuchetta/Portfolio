
import React,{useEffect,useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes 
} from "react-router-dom";
import routes from './config/routes' ;

import Loading from "./components/Loading";
import LoadingProvider from "./providers/LoadingProvider";


import AOS from 'aos';
import "aos/dist/aos.css";



function App() {

  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    const script = document.createElement("script");
  
    script.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    AOS.init({
      duration : 2000
    });
    setTimeout(()=>{
      setLoading(false)
    },3250)

    },[]);

  if (loading) return (<Loading/>) 
  else return (
        // <LoadingProvider>
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
          // </LoadingProvider>
  );
}

export default App;
