// import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Demographic } from "./Demographic";
import { FrontPage } from "./FrontPage";
import { Experiment } from "./Experiment";
import { End } from "./End";
import Context from "./context";
import { useState } from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <FrontPage />,
    },
    {
        path: "/demographic",
        element: <Demographic />,
    },
    {
        path: "/experiment",
        element: <Experiment />,
    },
    {
        path: "/end",
        element: <End />,
    },
]);

function App() {
    const [results, setResults] = useState([])
    const [userInfo, setUserInfo] = useState({
        name: "John Doe",
        age: -1,
        prog: false,
    })
    const context = {userInfo, setUserInfo, results, setResults};
    return (
        <Context.Provider value={context}> <RouterProvider router={router} />
        </Context.Provider>
    );
}

export default App;
