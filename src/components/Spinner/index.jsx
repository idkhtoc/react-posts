import spinner from '../../../assets/spinner.svg';
import classes from './index.module.css';

function Spinner() {
	return (
		<div className={classes.spinner}>
			<img src={spinner} alt='Loading...' />
		</div>
	);
}

export default Spinner;
