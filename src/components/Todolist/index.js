import {useState, useEffect} from 'react'
import axios from 'axios'
import UserDetails from '../UserDetails'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [selectedTodo, setSelectedTodo] = useState(null)

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        setTodos(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const handleViewUserClick = todo => {
    setSelectedTodo(todo)
  }

  return (
    <div className="row mt-5">
      <div className="col-lg-6">
        <input
          type="text"
          placeholder="Search todos..."
          className="form-control mb-3"
        />
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? 'Completed' : 'Incomplete'}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleViewUserClick(todo)}
                  >
                    View User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-lg-6">
        {selectedTodo && <UserDetails todo={selectedTodo} />}
      </div>
    </div>
  )
}

export default TodoList
