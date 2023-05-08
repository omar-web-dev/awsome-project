import { createBrowserRouter } from "react-router-dom"
import Main from "../main/Main"



const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <div>this is a home page</div>
            }

        ],
        

    }
])


export default routes