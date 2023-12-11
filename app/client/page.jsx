'use client';

import { useState } from 'react';

const ClientPage = () => {
	const [count, setCount] = useState(0);

	const plusHandler = () => {
		setCount((prev) => prev + 1);
	};

	const minusHandler = () => {
		setCount((prev) => prev - 1);
	};

	return (
		<div>
			<h1 className='my-20 font-bold text-center text-7xl'>{count}</h1>
			<div className='flex justify-center gap-20'>
				<button
					className='text-2xl btn btn-primary'
					onClick={plusHandler}
				>
					+
				</button>
				<button
					className='text-2xl btn btn-primary '
					onClick={minusHandler}
				>
					-
				</button>
			</div>
		</div>
	);
};

export default ClientPage;
