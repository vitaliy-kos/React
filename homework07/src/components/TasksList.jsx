import { useSelector, useDispatch } from 'react-redux'
import { fetchTasks } from '../redux/slices/tasksReducer';
import { useEffect } from 'react';

const TasksList = () => {
    const { tasks, loading } = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <div>
            <h1>Список задач (локально setTimeout):</h1>
            {loading && "Загрузка"}
            {!loading && <ul>
                {tasks.map(task => 
                    <li key={task.id}>
                        <h2>{task.title}</h2>
                        <p>id: {task.id}</p>
                        <p>решено: {task.completed ? 'да' : 'нет'}</p>
                    </li>
                )}
            </ul>}
        </div>
    )
}

export default TasksList
