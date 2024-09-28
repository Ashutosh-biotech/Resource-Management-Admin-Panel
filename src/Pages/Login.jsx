export default function Login() {

    const handleLogin = () => {
        localStorage.setItem("sessionId", "1234567890");
    }

    return (
        <main className={`pt-0 px-5 bg-gray-100 h-full`}>
            <div className="flex justify-center items-center h-screen ">
                <div className="bg-white p-8 rounded-lg shadow-md w-1/3">
                    <h1 className="text-2xl font-bold mb-4 flex justify-center items-center">Login</h1>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                            <input type="text" id="username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-outline" placeholder="Username" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-light focus:outline-none focus:shadow-outline" placeholder="Password" required />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={handleLogin}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </main >
    )
}