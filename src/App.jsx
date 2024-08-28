import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./Pages/Pages.js";
import {Navbar} from "./Components/Components.js"

function App() {

    return (
        <>
            <Navbar />
            <Home />
            <BrowserRouter>
                <Routes>
                    <Route element={Home} path=""/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
