import Link from 'next/link';

const HomePage = () => {
	return (
		<div>
			<h1 className='mb-8 text-5xl font-bold'>Next.js Tutorial</h1>
			<Link href='/client' className='btn btn-accent uppercase'>
				get started
			</Link>
		</div>
	);
};

export default HomePage;
