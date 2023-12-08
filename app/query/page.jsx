import Link from 'next/link';

const QueryPage = () => {
	return (
		<div>
			<h1 className='text-3xl font-bold underline'>Hello Query!</h1>
			<Link href='/' className='text-2xl underline'>
				Home Page
			</Link>
		</div>
	);
};

export default QueryPage;