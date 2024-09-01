import { useState } from "react"
import { Resource } from "../Components/SubComponents/SubComponents"
import axios from "axios";

export default function Home() {

	const [page, setPage] = useState(1);

	const BASE_URL = "https://apitide.pythonanywhere.com/api";
	const API_KEY = "u7sB8lbfeHNbm4XU684Wj9VoLpodm5ouH9SONJ9KSSGeogXous";
	const API_TOKEN = "fiDOp9QBPQ0vl1m4LRkrxrpuyeERwqFoxXCvedpJaAK92DqRMM";

	axios.get(`${BASE_URL}/get/${API_KEY}/${API_TOKEN}?page=${page}`).then((res) => {
		console.log(res.data);
	}).catch((err) => {
		console.log(err);
	});

	const filterClass = "inline-block px-4 py-2 text-sm font-medium focus:relative";

	const [active, setActive] = useState(0);

	return (
		<>
			<div className="flex flex-col justify-center item-center">
				<span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm mx-auto">
					<button
						className={`${filterClass} ${active === 0 ? 'bg-blue-600 text-white' : 'hover:bg-gray-50 text-gray-700'}`}
						onClick={() => setActive(0)}> Resources </button>
					<button
						className={`${filterClass} ${active === 1 ? 'bg-blue-600 text-white' : 'hover:bg-gray-50 text-gray-700'}`}
						onClick={() => setActive(1)}> Requests </button>
					<button
						className={`${filterClass} ${active === 2 ? 'bg-blue-600 text-white' : 'hover:bg-gray-50 text-gray-700'}`}
						onClick={() => setActive(2)}> Users </button>
				</span>
			</div>
			<div className="mt-3 flex justify-start border-[1.5px] border-gray-300 px-3 py-2 rounded container mx-auto">
				<i className={"fal fa-magnifying-glass"}></i>
				<input type="text" className={"border-none w-full outline-none pl-3 bg-gray-100"} />
			</div>
			<div className="container mx-auto">
				<div className="flex flex-row">
					<Resource />
				</div>
			</div>
		</>
	)
}