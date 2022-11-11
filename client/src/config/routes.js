
import LayoutBasic from "../layouts/LayoutBasic";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Error404 from "../pages/Error404";



const routes =[
    {
        path: "/",
        layout : LayoutBasic,
        component : Home
    },
    {
        path: "/about",
        layout : LayoutBasic,
        component : About
    },
    {
        path: "/projects",
        layout : LayoutBasic,
        component : Projects
    },
    {
        path: "*",
        layout : LayoutBasic,
        component : Error404
    }


]

export default routes ;