import Link from 'next/link';

const HomePage = () => {
	return (
		<div>
			<h1 className='text-3xl font-bold underline'>Hello world!</h1>
			<Link href='/about' className='text-2xl underline'>
				About Page
			</Link>
			<Link href='/client' className='text-2xl underline'>
				Client Page
			</Link>
			<Link href='/tasks' className='text-2xl underline'>
				Tasks Page
			</Link>
			<Link href='/query' className='text-2xl underline'>
				Query Page
			</Link>
			<Link href='/drinks' className='text-2xl underline'>
				Drinks Page
			</Link>
			<Link href='/prisma-example' className='text-2xl underline'>
				Prisma EXample Page
			</Link>
		</div>
	);
};

export default HomePage;
