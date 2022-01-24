import { useDispatch, useSelector } from 'react-redux';
import { setDataOnLoad } from '../redux/actions/auth';
import { getCurrentAuth } from '../helpers/auth';

const useAuth = () => {
	const dispatch = useDispatch();
	const auth = useSelector(state => state.authReducer.auth);
	return {
		auth: auth,
		setData: () => dispatch(setDataOnLoad(getCurrentAuth()))
	};
};

export default useAuth;