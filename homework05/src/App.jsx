import './App.css'
import Toggler from './components/Toggler/Toggler'

import { useSelector } from 'react-redux'


function App() {
  const isDark = useSelector(isDark => isDark);
  return (
    <div className={"main" + (isDark ? " dark" : "")}>
      <Toggler />
      <h1>Приложение для переключения темы сайта</h1>
      <p>Создать приложение, позволяющее пользователю переключать между светлой и темной темой сайта. <br/><br/><b>Функционал:</b></p>
      <ul>
        <li>Action types: TOGGLE_THEME</li>
        <li>Actions: Создайте действие для переключения темы</li>
        <li>Reducer: Реализуйте редьюсер, который обрабатывает это действие и изменяет тему в состоянии приложения</li>
        <li>Component: Создайте компонент, который отображает переключатель для изменения темы сайта</li>
      </ul>
      <p><b>Описание:</b></p>
        <ul>
          <li>Состояние: Для хранения текущей темы можно использовать логическую переменную (true для темной темы и false для светлой) или строку ("dark" или "light")</li>
          <li>Интерфейс: Ваш интерфейс может состоять из переключателя, который изменяет тему с светлой на темную и обратно</li>
        </ul>
    </div>
  )
}

export default App