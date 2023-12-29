import { deleteTask } from '../services/actions';

const DeleteForm = ({ id }) => {
	return (
		<form action={deleteTask}>
			<input type='hidden' name='id' value={id} />
			<button className='uppercase btn btn-xs btn-error'>delete</button>
		</form>
	);
};

export default DeleteForm;
