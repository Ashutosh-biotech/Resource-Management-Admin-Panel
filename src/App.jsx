import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login, AddItem } from "./Pages/Pages.js";
import { Navbar } from "./Components/Components.js"

function App() {

    const sessionId = localStorage.getItem("sessionId");
    let login = false;
    if (sessionId) {
        login = true;
    }
    return (
        <BrowserRouter>
            {login ? <Navbar /> : null}
            {login ? (
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/add/item" element={<AddItem />} />
                </Routes>
            ) : (
                <Login />
            )}
        </BrowserRouter>
    )
}

export default App
