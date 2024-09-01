export default function Resource() {
	return (
		<div className="block p-5 m-3 border border-gray-300 rounded bg-white">
			<div className="flex item-start justify-start">
				<img src="https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png" alt="" className="rounded w-10 h-10" />
				<div className="flex flex-col ml-3">
					<span className="text-sm font-bold">Resource Name</span>
					<span className="text-sm">Resource Description</span>
				</div>
			</div>
			<div className="flex flex-col justify-between my-3">
				<a href="#" className="text-sm font-bold text-blue-600 mb-3">www.example.com</a>
				<p className="text-sm text-gray-500">100</p>
			</div>
		</div>
	)
}