/** @format */

import { Button } from "./ui/button";

export const Header = () => {
	return (
		<div className='bg-black rounded-t-lg text-white flex justify-between'>
			<div>
				<div className='flex'>
					<div>Abstract</div>
					<div>Help Center</div>
				</div>
			</div>
			<div>
				<Button variant='secondary' className='outline-1'>
					Secondary
				</Button>
			</div>
		</div>
	);
};
