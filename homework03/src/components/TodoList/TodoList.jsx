import { useState, useRef } from 'react'
import { Button, TextField, CardContent, CardActions, Typography, Alert, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import Ids from 'ids';
import { grey, red } from '@mui/material/colors';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState("");

    const valueRef = useRef('');

    const addTask = () => {
        if (valueRef.current.value.length > 0) {
            const ids = new Ids();

            setTasks(prevState => (
                [...prevState, { 
                    id: ids.next(), 
                    task: valueRef.current.value 
                }]
            ));

            valueRef.current.value = '';
            setError("");
        } else {
            setError("Необходимо написать название задачи!");
        }
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id != id));
    }
  
    return (
        <div className="TodoList">
            <h1>Задание 2 - Список дел с Material UI</h1>
            <p>Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.<br/><br/>
            <b>Компоненты:</b></p>
            <ul>
                <li>Используйте TextField для ввода новой задачи.</li>
                <li>Добавьте Button для добавления задачи в список.</li>
                <li>Для каждой задачи в списке используйте Card или ListItem из Material UI.</li>
                <li>Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).</li>
            </ul>
            <p><b>Логика:</b></p>
            <ul>
                <li>При нажатии на кнопку добавления, новая задача должна добавляться в список.</li>
                <li>Рядом с каждой задачей должна быть кнопка для её удаления.</li>
            </ul>

            <div className="addTask">
                <h2>Добавление задачи</h2>

                {error && <Alert severity="error">{error}</Alert>}

                <CardContent className="addTaskField">

                    <TextField 
                        label="Название задачи"
                        size="small"
                        inputRef={valueRef}
                    />

                    <CardActions>
                        <Button 
                            variant="contained"
                            onClick={addTask}>Добавить в список</Button>
                    </CardActions>
                    
                </CardContent>
            </div>

            <div className="tasksList">
                <h2>Список задач</h2>
                {tasks.length == 0 ? 'Список задач пуст' : 
                    tasks.map((task) => {
                        return (<CardContent key={task.id} className="card">
                            <Typography>{task.task}</Typography>
                            <CardActions>
                                <IconButton 
                                    onClick={() => deleteTask(task.id)} 
                                    sx={{background: grey[200]}}>
                                        <DeleteIcon sx={{ color: red[500] }}/>
                                </IconButton>
                            </CardActions>
                        </CardContent>)
                    })
                }
            </div>

        </div>
    )
}
export default TodoList;