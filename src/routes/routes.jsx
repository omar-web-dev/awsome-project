import { createBrowserRouter } from "react-router-dom"
import Main from "../main/Main"
import SimpleSlider from "../pages/SimpleSlider/SimpleSlider"
import TowColumns from "../pages/TowColumns"
import AreaChart from "../pages/MyChart/AreaChart"
import MyChart from "../pages/MyChart/MyChart"



const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <TowColumns/>
            },
            {
                path: "simple-slider",
                element: <SimpleSlider/>
            },
            {
                path: "area-chart",
                element: <AreaChart/>
            },
            {
                path: "my-chart",
                element: <MyChart/>
            },

        ],
        

    }
])


export default routes