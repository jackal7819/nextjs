import Link from 'next/link';

const ClientPage = () => {
	return (
		<div>
			<h1 className='text-3xl font-bold underline'>Hello Client!</h1>
			<Link href='/' className='text-2xl underline'>
				Home Page
			</Link>
		</div>
	);
};

export default ClientPage;