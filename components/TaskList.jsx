import Link from 'next/link';
import DeleteForm from './DeleteForm';
import { getAllTasks } from '../services/actions';

const TaskList = async () => {
	const tasks = await getAllTasks();

	if (tasks.length === 0) {
		return (
			<h2 className='mt-8 text-lg font-medium'>No tasks to show...</h2>
		);
	}
	
	return (
		<ul className='mt-8'>
			{tasks.map((task) => (
				<li
					key={task.id}
					className='flex items-center justify-between px-6 py-4 mb-4 border rounded-lg shadow-lg border-base-300'
				>
					<h2
						className={`text-lg capitalize ${
							task.completed ? 'line-through' : null
						}`}
					>
						{task.content}
					</h2>
					<div className='flex items-center gap-6'>
						<Link
							href={`/tasks/${task.id}`}
							className='uppercase btn btn-accent btn-xs'
						>
							edit
						</Link>
						<DeleteForm id={task.id} />
					</div>
				</li>
			))}
		</ul>
	);
};

export default TaskList;
