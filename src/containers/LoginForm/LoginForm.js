import { Form, Input, ValidationErrorMessage, Button, ErrorMessageComponent } from '../../components';
import { AccountBox, Lock } from '@mui/icons-material';
import { Wrapper, Title } from './styles';
import login from './handleLoginForm';
import { useState } from 'react';
import colors from '../../helpers/colors';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/auth';
import { setDataOnLoad } from '../../redux/actions/tasks';
import { handleUserLogin } from '../../helpers/auth';

const loginColors = colors.form;

const LoginForm = () => {
	const dispatch = useDispatch();
	const [credentialsError, setCredentialsError] = useState(false);

	const handleSubmit = async data => {
		try {
			const userData = await handleUserLogin(data);
			dispatch(setDataOnLoad(userData.tasks));
			dispatch(loginUser(userData));
		} catch {
			setCredentialsError(true);
		}
	};

	return (
		<Wrapper>
			<Title>¡Bienvenido de nuevo!</Title>
			<Form
				initialValues={login.initialValues}
				validationSchema={login.validationSchema}
				onSubmit={values => handleSubmit(values)}
			>
				{
					credentialsError &&
					<ErrorMessageComponent>
						Usuario o contraseña incorrectos
					</ErrorMessageComponent>
				}
				<ValidationErrorMessage name="username" />
				<Input
					type="text"
					name="username"
					placeholder="Usuario"
					icon={<AccountBox color="inherit" fontSize="inherit" />}
				/>
				<ValidationErrorMessage name="password" />
				<Input
					type="password"
					name="password"
					placeholder="Contraseña"
					icon={<Lock color="inherit" fontSize="inherit" />}
				/>
				<Button
					color={loginColors.button.color}
					bgcolor={loginColors.button.bgColor}
					type="submit"
				>
					Iniciar sesión
				</Button>
			</Form>
		</Wrapper>
	);
};

export default LoginForm;