/** @format */

export const Footer = () => {
	return (
		<footer className='bg-black'>
			<div className='grid grid-cols-6'>
				<div className='col-span-5'>
					<div className='mx-auto w-full max-w-screen-xl'>
						<div className='grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4'>
							<div>
								<h2 className='mb-4 text-md font-bold text-white uppercase dark:text-white'>
									Abstract
								</h2>
								<ul className='text-white font-sm'>
									<li className='mb-0'>
										<a href='#' className=' hover:underline'>
											Branches
										</a>
									</li>
								</ul>
							</div>
							<div>
								<h2 className='mb-4 text-md font-bold text-white uppercase dark:text-white'>
									Resources
								</h2>
								<ul className='text-white dark:text-gray-400 font-small'>
									<li className='mb-0'>
										<a href='#' className='hover:underline'>
											Blog
										</a>
									</li>
									<li className='mb-0'>
										<a href='#' className='hover:underline'>
											Help Center
										</a>
									</li>
									<li className='mb-0'>
										<a href='#' className='hover:underline'>
											Release Notes
										</a>
									</li>
									<li className='mb-0'>
										<a href='#' className='hover:underline'>
											Status
										</a>
									</li>
								</ul>
							</div>
							<div>
								<h2 className='mb-4 text-md font-bold text-white uppercase dark:text-white'>
									community
								</h2>
								<ul className='text-white dark:text-gray-400 font-small'>
									<li className='mb-0'>
										<a href='#' className='hover:underline'>
											Twitter
										</a>
									</li>
									<li className='mb-0'>
										<a href='#' className='hover:underline'>
											LinkedIn
										</a>
									</li>
									<li className='mb-0'>
										<a href='#' className='hover:underline'>
											Facebook
										</a>
									</li>
									<li className='mb-0'>
										<a href='#' className='hover:underline'>
											Dribble
										</a>
									</li>
									<li className='mb-0'>
										<a href='#' className='hover:underline'>
											Podcast
										</a>
									</li>
								</ul>
							</div>

							<div className='grid grid-rows-2'>
								<div className='row-span-1'>
									<h2 className='mb-4 text-md font-bold text-white uppercase'>
										Company
									</h2>
									<ul className='text-white dark:text-gray-400 font-small'>
										<li className='mb-0'>
											<a href='#' className='hover:underline'>
												About Us
											</a>
										</li>
										<li className='mb-0'>
											<a href='#' className='hover:underline'>
												Careers
											</a>
										</li>
										<li className='mb-0'>
											<a href='#' className='hover:underline'>
												Legal
											</a>
										</li>
									</ul>
								</div>

								<div className='row-span-1'>
									<h2 className=' mt-6 mb-1 text-md font-bold text-white uppercase'>
										Contact Us
									</h2>
									<ul className='text-white dark:text-gray-400 font-small'>
										<li className='mb-0'>
											<a href='#' className='hover:underline'>
												info@abstract.com
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Last column partitioned into two rows */}
				<div className='col-span-1 text-white flex flex-col justify-between mb-7'>
					<div></div> {/* Empty div to push content down */}
					<div>
						<div className='gap-1'>
							<span>&#169;</span> <span>Copyright 2022</span>
						</div>
						<div>Abstract Studio Design, Inc.</div>
						<div>All rights reserved</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
