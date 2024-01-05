'use client';

import { createTaskCustom } from '../services/actions';
import { useFormState, useFormStatus } from 'react-dom';

const SubmitBtn = () => {
	const { pending } = useFormStatus();
	return (
		<button
			type='submit'
			className='uppercase btn btn-primary join-item'
			disabled={pending}
		>
			{pending ? 'please wait...' : 'create task'}
		</button>
	);
};

const initialState = {
	message: null,
};

const TaskFormCustom = () => {
	const [state, formAction] = useFormState(createTaskCustom, initialState);

	return (
		<form action={formAction}>
			{state.message ? <p className='mb-8 text-center'>{state.message}</p> : null}
			<div className='w-full join'>
				<input
					type='text'
					name='content'
					id='content'
					className='w-full input input-bordered join-item'
					placeholder='Type here'
					required
				/>
				<SubmitBtn />
			</div>
		</form>
	);
};

export default TaskFormCustom;
