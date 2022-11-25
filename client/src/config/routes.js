
import LayoutHome from "../layouts/LayoutHome";
import LayoutProjects from "../layouts/LayoutProjects";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Error404 from "../pages/Error404";



const routes =[
    {
        path: "/",
        layout : LayoutHome,
        component : Home
    },
    {
        path: "/about",
        layout : LayoutHome,
        component : About
    },
    {
        path: "/projects",
        layout : LayoutProjects,
        component : Projects
    },
    {
        path: "*",
        layout : LayoutHome,
        component : Error404
    }


]

export default routes ;