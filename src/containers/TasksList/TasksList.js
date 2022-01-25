import { List, ListItem, ListItemText, Select, Option } from '../../components';
import { Wrapper, Title, TextBox, DeleteButton, InputWrapper, AddTaskInputWrapper } from './styles';
import { Checkbox, Typography } from '@mui/material';
import { useState } from 'react';
import { addTask, editTask, removeTask } from '../../redux/actions/tasks';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskToLocalStorage, editTaskOnLocalStorage, removeTaskFromLocalStorage } from '../../helpers/tasks';
import AddIcon from '@mui/icons-material/Add';

const TasksListMenu = () => {
	const dispatch = useDispatch();
	const tasks = useSelector(state => state.tasksReducer.tasks);
	const [taskInputValue, setTaskInputValue] = useState('');
	const [filter, setFilter] = useState('todas');
	const [searchValue, setSearchValue] = useState('');

	const handleCompletedTask = task => {
		editTaskOnLocalStorage(task);
		dispatch(editTask(task));
	};

	const handleAddTask = e => {
		if (e)
			e.preventDefault();
		if (taskInputValue) {
			const task = {
				name: taskInputValue,
				completed: false
			};
			addTaskToLocalStorage(task);
			dispatch(addTask(task));
			setTaskInputValue('');
		}
	};

	const statusFilter = (task, filter) => {
		return (
			filter === 'todas' ||
			filter === 'pendientes' && !task.completed ||
			filter === 'completadas' && task.completed
		);
	};

	const searchFilter = (task, searchValue) => {
		return task.name.toLowerCase().includes(searchValue.toLowerCase());
	};

	const tasksFilter = (task, filter, searchValue) => {
		return statusFilter(task, filter) && searchFilter(task, searchValue);
	};

	const filteredData = tasks.filter(task => tasksFilter(task, filter, searchValue));

	const handleDeleteTask = task => {
		removeTaskFromLocalStorage(task);
		dispatch(removeTask(task));
	};

	return (
		<Wrapper>
			<Title>Mis tareas</Title>
			<InputWrapper>
				<AddTaskInputWrapper>
					<TextBox
						type="text"
						value={taskInputValue}
						onChange={e => setTaskInputValue(e.target.value)}
						placeholder="Agregar tarea"
						onSubmit={e => handleAddTask(e.target.value)}
					/>
					<AddIcon sx={{ cursor: 'pointer' }} onClick={() => handleAddTask()} />
				</AddTaskInputWrapper>
				<TextBox
					type="text"
					value={searchValue}
					onChange={e => setSearchValue(e.target.value)}
					placeholder="Buscar tareas"
				/>
				<Select
					value={filter}
					onChange={e => setFilter(e.target.value)}
					autoWidth={false}
				>
					<Option value="todas">Todas</Option>
					<Option value="pendientes">Pendientes</Option>
					<Option value="completadas">Completadas</Option>
				</Select>
			</InputWrapper>
			<List>
				{
					tasks && !!tasks.length && filteredData.length ?
						filteredData.map(task => (
							<ListItem
								key={task.name}
								sx={{padding: '0', marginTop: '15px'}}
							>
								<Checkbox
									onClick={() => handleCompletedTask(task)}
									checked={task.completed}
								/>
								<ListItemText sx={task.completed && {color: 'gray', textDecoration: 'line-through'}} >{task.name}</ListItemText>
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