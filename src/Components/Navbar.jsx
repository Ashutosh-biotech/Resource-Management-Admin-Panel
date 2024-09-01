import { Logo, Me } from "../Assets/Assets";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="fixed w-full bg-white shadow top-0">
            <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="inline-block rounded bg-green-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl active:bg-green-500 mr-10" href="/" >
                        Add Items
                    </a>
                    <img src={Me} alt="Profile" className="w-10 h-10 rounded-full" />
                </nav>
            </div>
        </header>
    )
}
