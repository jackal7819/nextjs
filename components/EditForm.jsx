import { editTask } from '../services/actions';

const EditForm = ({ task }) => {
	const { id, completed, content } = task;

	return (
		<form
			action={editTask}
			className='max-w-sm p-12 border rounded-lg border-base-300'
		>
			<input type='hidden' name='id' value={id} />
			<input
				type='text'
				name='content'
				defaultValue={content}
				required
				className='w-full input input-bordered'
			/>
			<div className='my-4 form-control'>
				<label htmlFor='completed' className='cursor-pointer label'>
					<span className='label-text'>Completed</span>
					<input
						type='checkbox'
						name='completed'
						id='completed'
						defaultChecked={completed}
						className='checkbox checkbox-primary checkbox-sm'
					/>
				</label>
			</div>
			<button
				type='submit'
				className='uppercase btn btn-primary btn-block btn-sm'
			>
				edit
			</button>
		</form>
	);
};

export default EditForm;
