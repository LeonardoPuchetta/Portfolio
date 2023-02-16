
import LayoutHome from "../layouts/LayoutHome";
import LayoutProjects from "../layouts/LayoutProjects";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Curriculum from "../pages/Curriculum";
import Error404 from "../pages/Error404";

const routes =[
    {
        path: "/",
        layout : LayoutHome,
        component : Home
    },
    {
        path: "/about",
        layout : LayoutProjects,
        component : About
    },
    {
        path: "/projects",
        layout : LayoutProjects,
        component : Projects
    },
    {
        path: "/curriculum",
        layout : LayoutProjects,
        component : Curriculum
    },
    {
        path: "*",
        layout : LayoutHome,
        component : Error404
    }


]

export default routes ;