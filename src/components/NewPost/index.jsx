import { useNavigate, Form } from 'react-router-dom';

import classes from './index.module.css';
import Modal from '../Modal';

function NewPost() {
	const navigate = useNavigate();

	const closeHandler = () => {
		navigate('..');
	};

	return (
		<Modal>
			<Form method='post' className={classes.form}>
				<p>
					<label htmlFor='body'>Text</label>
					<textarea id='body' required rows={3} name='body' />
				</p>
				<p>
					<label htmlFor='name'>Your name</label>
					<input type='text' id='name' required name='author' />
				</p>
				<p className={classes.actions}>
					<button type='button' onClick={closeHandler}>
						Cancel
					</button>
					<button>Submit</button>
				</p>
			</Form>
		</Modal>
	);
}

export default NewPost;
