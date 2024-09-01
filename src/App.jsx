import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login } from "./Pages/Pages.js";
import { Navbar } from "./Components/Components.js"

function App() {

    const sessionId = localStorage.getItem("sessionId");
    let login = false;
    if (sessionId) {
        login = true;
    }
    return (
        <>
            <BrowserRouter>
                {login ? <Navbar /> : null}
                <main className={`${login ? "pt-24" : "pt-0"} px-5 bg-gray-100 h-screen`}>
                    {login ? (
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                        </Routes>
                    ) : (
                        <Routes>
                            <Route exact path="/" element={<Login />} />
                        </Routes>
                    )}
                </main>
            </BrowserRouter>
        </>
    )
}

export default App
