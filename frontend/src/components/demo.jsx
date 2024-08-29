/** @format */

import { Button } from "./ui/button";

export const Header = () => {
	return (
		<div>
			<div
				className='bg-black  border-2 rounded-t-lg
			 border-white mt-1 text-white flex items-center justify-between p-4'>
				<div className='flex space-x-4'>
					<div className='flex'>Abstract</div>
					<div className='flex'>Help Center</div>
				</div>

				<div>
					<Button variant='secondary'>Secondary</Button>
				</div>
			</div>

			<div className='flex flex-col items-center justify-center bg-purple-200 h-80'>
				<div>
					<div>
						<div className='font-sans text-3xl text-black flex items-center'>
							<p>How can we help</p>
							{/* <span>&#x3F;</span> */}
							<span>&#x3F;</span>
						</div>
					</div>

					<div>
						<form class='max-w-md mx-auto'>
							<label
								for='default-search'
								class='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
								Search
							</label>
							<div class='relative'>
								<div class='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'></div>
								<input
									type='search'
									id='default-search'
									class='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='Search Mockups, Logos...'
									required
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
