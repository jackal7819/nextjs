import Link from 'next/link';

const TasksPage = () => {
	return (
		<div>
			<h1 className='text-3xl font-bold underline'>Hello Tasks!</h1>
			<Link href='/' className='text-2xl underline'>
				Home Page
			</Link>
		</div>
	);
};

export default TasksPage;