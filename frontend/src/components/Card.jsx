/** @format */

export const Card = ({ id, title, description }) => {
	return (
		<div className='max-w-sm p-6 bg-gray-100 border border-blue-200 rounded rounded-lg shadow'>
			<div className='border-b-2 border-blue-200'>
				<p>Card ID: {id}</p>
				<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
					{title}
				</h5>
			</div>

			<p className='mb-3 font-sans text-gray-700'>{description}</p>
		</div>
	);
};
