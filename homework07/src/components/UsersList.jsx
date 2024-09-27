import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../redux/slices/usersReducer';
import { useEffect } from 'react';

const UsersList = () => {
    const { users, loading } = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            <h1>Список пользователей (загрузка по api):</h1>
            {loading && "Загрузка"}
            {!loading && <ul>
                {users.map(user => 
                    <li key={user.id}>{user.name}</li>
                )}
            </ul>}
        </div>
    )
}

export default UsersList
