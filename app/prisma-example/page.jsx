import Link from 'next/link';

const PrismaExample = () => {
	return (
		<div>
			<h1 className='text-3xl font-bold underline'>
				Hello Prisma Example!
			</h1>
			<Link href='/' className='text-2xl underline'>
				Home Page
			</Link>
		</div>
	);
};

export default PrismaExample;
