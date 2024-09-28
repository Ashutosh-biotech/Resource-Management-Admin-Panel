import { AddItemImage } from "../Assets/Assets";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

export default function AddItem() {

	const BASE_URL = "https://apitide.pythonanywhere.com/api";
	const API_KEY = "u7sB8lbfeHNbm4XU684Wj9VoLpodm5ouH9SONJ9KSSGeogXous";
	const API_TOKEN = "fiDOp9QBPQ0vl1m4LRkrxrpuyeERwqFoxXCvedpJaAK92DqRMM";

	const [loading, setLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		axios.get(`${BASE_URL}/csrf/${API_KEY}`).then((response) => {
			axios.post(`${BASE_URL}/add/${API_KEY}/${API_TOKEN}`, {
				csrf_token: response.data.csrf_token,
				title: title.value,
				link: link.value,
				icon_url: icon_url.value,
				tag_name: tag_name.value,
				category: category.value,
				description: description.value,
			}).then((response) => {
				toast.success("Item added successfully");
				e.target.reset();
				setLoading(false);
			}).catch((err) => {
				toast.error("Error adding item"+err.data);
				setLoading(false);
			});
		}).catch((err) => {
			toast.error("Error fetching CSRF token"+err);
			setLoading(false);
		});
	}

	return (
			<main className={`pt-16 h-full`}>
				<div className="flex">
					<div className="w-1/2 mt-1">
						<Link to="/" className="text-sm flex">
							<p className="text-gray-500 py-2 px-3 mt-2 ml-2 hover:border-dashed hover:text-gray-700 hover:border-black border border-transparent">&lt; Users</p>
						</Link>
						<div className="flex flex-col justify-center items-center w-full">
							<span className="text-2xl font-bold">Item Details</span>
							<br />
							<form action="/add/item" method="post" onSubmit={handleSubmit}>
								<div className="flex flex-col mb-5">
									<label htmlFor="title" className="text-sm uppercase">Item Title</label>
									<input type="text" name="title" id="title" className="border border-gray-300 p-2 outline-none" required disabled={loading} />
								</div>
								<div className="flex flex-col my-5">
									<label htmlFor="link" className="text-sm uppercase">link</label>
									<input type="url" name="link" id="link" className="border border-gray-300 p-2 outline-none text-blue-500" required disabled={loading} />
								</div>
								<div className="flex flex-col my-5">
									<label htmlFor="icon_url" className="text-sm uppercase">icon url</label>
									<input type="url" name="icon_url" id="icon_url" className="border border-gray-300 p-2 outline-none text-blue-500" required disabled={loading} />
								</div>
								<div className="flex flex-col my-5">
									<label htmlFor="tag_name" className="text-sm uppercase">tag name</label>
									<select name="tag_name" id="tag_name" className="border border-gray-300 p-2 outline-none" required disabled={loading} defaultValue={"resources"}>
										<option value="user">User</option>
										<option value="request">Request</option>
										<option value="resource">Resource</option>
									</select>
								</div>
								<div className="flex flex-col my-5">
									<label htmlFor="category" className="text-sm uppercase">Category</label>
									<input type="text" name="category" id="category" className="border border-gray-300 p-2 outline-none" required disabled={loading} />
								</div>
								<div className="flex flex-col my-5">
									<label htmlFor="description" className="text-sm uppercase">Description</label>
									<textarea name="" id="description" cols="50" rows="3" className="border border-gray-300 p-2 outline-none" required disabled={loading}></textarea>
								</div>
								<div className="flex justify-center items-center my-5">
									<button type="submit" className={`bg-blue-500 text-white p-2 rounded-md uppercase`} disabled={loading}>
										<span className={`h-10`}></span>Create
									</button>
								</div>
							</form>
							<ToastContainer />
						</div>
					</div>
					<div className="w-1/2 -mr-5">
						<img src={AddItemImage} alt="" className="fixed top-0 bottom-0 w-full h-full" />
					</div>
				</div>
			</ main>
		)
	}