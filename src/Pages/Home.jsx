"use strict"

import {useEffect, useState} from "react"
import {Card} from "../Components/SubComponents/SubComponents"
import axios, {all} from "axios";

export default function Home() {

	const [allResources, setAllResources] = useState([])

	const [resources, setResources] = useState([]);
	const [requests, setRequests] = useState([]);
	const [user, setUser] = useState([]);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);

	const BASE_URL = "https://apitide.pythonanywhere.com/api";
	const API_KEY = "u7sB8lbfeHNbm4XU684Wj9VoLpodm5ouH9SONJ9KSSGeogXous";
	const API_TOKEN = "fiDOp9QBPQ0vl1m4LRkrxrpuyeERwqFoxXCvedpJaAK92DqRMM";

	useEffect(() => {
		setLoading(true);
		axios.get(`${BASE_URL}/get/${API_KEY}/${API_TOKEN}?page=${page}`).then((response) => {
			setAllResources(response.data.data);
			setResources(allResources);
			setLoading(true);
		}).catch((err) => {
			console.log(err);
			setLoading(true);
		});
	}, []);


	const handleRequests = () => {
		let arr = [];
		for (const resource of allResources) {
			if (resource.tag === "request") {
				arr.push(resource);
			}
		}
		setResources(arr);
		setActive(1);
	}

	const handleUsers = () => {
		let arr = [];
		for (const resource of allResources) {
			if (resource.tag === "user") {
				arr.push(resource);
			}
		}
		setResources(arr);
		setActive(2);
	}

	const handleResources = () => {
		setResources(allResources);
		setActive(0)
	}

	const filterClass = "inline-block px-4 py-2 text-sm font-medium focus:relative";

	const [active, setActive] = useState(0);

	return (
		<main className={`pt-16 px-5 h-full py-5`}>
			<div className="flex flex-col justify-center item-center mt-5">
				<span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm mx-auto">
					<button
						className={`${filterClass} ${active === 0 ? 'bg-blue-600 text-white' : 'hover:bg-gray-50 text-gray-700'}`}
						onClick={handleResources}> Resources </button>
					<button
						className={`${filterClass} ${active === 1 ? 'bg-blue-600 text-white' : 'hover:bg-gray-50 text-gray-700'}`}
						onClick={handleRequests}> Requests </button>
					<button
						className={`${filterClass} ${active === 2 ? 'bg-blue-600 text-white' : 'hover:bg-gray-50 text-gray-700'}`}
						onClick={handleUsers}> Users </button>
				</span>
			</div>
			<div className="mt-3 flex justify-start border-[1.5px] border-gray-300 px-3 py-2 rounded container mx-auto">
				<i className={"fal fa-magnifying-glass"}></i>
				<input type="text" className={"border-none w-full outline-none pl-3 bg-gray-100"}/>
			</div>
			<div className="container mx-auto">
				<div className="grid grid-cols-3 gap-5 mt-5">
					{resources.map((resource) => (
						<Card key={resource.id} resource={resource}/>
					))}
				</div>
			</div>
		</main>
	)
}