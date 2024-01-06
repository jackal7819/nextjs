'use client';

import { useFormStatus } from 'react-dom';
import { deleteTask } from '../services/actions';

const SubmitBtn = () => {
	const { pending } = useFormStatus();
	return (
		<button
			type='submit'
			className='uppercase btn btn-error btn-xs'
			disabled={pending}
		>
			{pending ? 'await..' : 'delete'}
		</button>
	);
};

const DeleteForm = ({ id }) => {
	return (
		<form action={deleteTask}>
			<input type='hidden' name='id' value={id} />
			<SubmitBtn />
		</form>
	);
};

export default DeleteForm;
