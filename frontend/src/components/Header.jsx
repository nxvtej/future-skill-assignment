/** @format */

import { Button } from "./ui/button";

export const Header = () => {
	return (
		<div>
			<div className='flex flex-col items-center justify-center bg-purple-200 h-80'>
				<div>
					<div className='font-sans text-3xl text-black flex items-center w-full'>
						<p>How can we help</p>
						<span>&#x3F;</span>
					</div>
					<div className='mt-4 w-full px-4'>
						<input
							className='h-12 w-[120%] -ml-10 p-4 rounded-md border border-black border border-t-2 shadow-lg'
							type='text'
							placeholder='Enter search value here'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
