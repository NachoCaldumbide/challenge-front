import { List, ListItem, ListItemText } from '../../components';
import { Wrapper, Title, AddTaskComponent, DeleteButton } from './styles';
import { Checkbox, Typography } from '@mui/material';
import { useState } from 'react';
import { addTask, editTask, removeTask } from '../../redux/actions/tasks';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskToLocalStorage, editTaskOnLocalStorage, removeTaskFromLocalStorage } from '../../helpers/tasks';

const TasksListMenu = () => {
	const dispatch = useDispatch();
	const tasks = useSelector(state => state.tasksReducer.tasks);
	const [taskInputValue, setTaskInputValue] = useState('');

	const handleCompletedTask = task => {
		editTaskOnLocalStorage(task);
		dispatch(editTask(task));
	};

	const handleAddTask = e => {
		e.preventDefault();
		const task = {
			name: taskInputValue,
			completed: false
		};
		addTaskToLocalStorage(task);
		dispatch(addTask(task));
		setTaskInputValue('');
	};

	const handleDeleteTask = task => {
		removeTaskFromLocalStorage(task);
		dispatch(removeTask(task));
	};

	return (
		<Wrapper>
			<Title>Mis tareas</Title>
			<AddTaskComponent
				type="text"
				value={taskInputValue}
				onChange={e => setTaskInputValue(e.target.value)}
				placeholder="Agregar tarea"
				onSubmit={e => handleAddTask(e)}
			/>
			<List>
				{
					tasks && !!tasks.length ?
						tasks.map(task => (
							<ListItem
								key={task.name}
							>
								<Checkbox
									onClick={() => handleCompletedTask(task)}
									checked={task.completed}
								/>
								<ListItemText>{task.name}</ListItemText>
								{
									task.completed &&
									<DeleteButton onClick={() => handleDeleteTask(task)}>Borrar</DeleteButton>
								}
							</ListItem>
						)) :
						<Typography mt="10px">No tenés tareas registradas.</Typography>
				}
			</List>
		</Wrapper>
	);
};

export default TasksListMenu;