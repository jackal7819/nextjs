import { createTask } from "../services/actions";

const TaskForm = () => {
	return (
		<form action={createTask}>
			<div className='w-full join'>
				<input
					type='text'
					name='content'
					id='content'
					className='w-full input input-bordered join-item'
					placeholder='Type here'
					required
				/>
				<button
					type='submit'
					className='uppercase btn btn-primary join-item'
				>
					create task
				</button>
			</div>
		</form>
	);
};

export default TaskForm;
