export default function Card({ resource }) {
	return (
		<div className="block p-5 border border-gray-300 rounded bg-white">
			<div className="flex item-start justify-start">
				<img src={resource.icon_url} alt="" className="rounded w-10 h-10" />
				<div className="flex flex-col ml-3">
					<span>{resource.title}</span>
					<span className="text-xs text-gray-500">{resource.description}</span>
				</div>
			</div>
			<div className="flex flex-col justify-between my-3">
				<a href={resource.link} className="text-sm font-bold text-blue-600 mb-3">{resource.link}</a>
				<p className="text-sm text-gray-500">{resource.category}</p>
			</div>
		</div>
	)
}