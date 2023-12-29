import prisma from '../../services/db';

const prismaHandlers = async () => {
	await prisma.task.create({
		data: {
			content: 'wake up',
		},
	});
	const allTasks = await prisma.task.findMany({
		orderBy: {
			createdAt: 'desc',
		},
	});
	return allTasks;
};

const PrismaExample = async () => {
	const tasks = await prismaHandlers();
	
	return (
		<div>
			<h1 className='text-3xl font-bold underline'>Prisma Example:</h1>
			{tasks.map((task) => (
				<h2 key={task.id} className='py-2 text-xl'>
					😁 {task.content}
				</h2>
			))}
		</div>
	);
};

export default PrismaExample;
