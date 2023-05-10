import {useState, useEffect} from 'react'

const UserDetails = ({userId}) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
      )
      const data = await response.json()
      setUser(data)
    }

    fetchUser()
  }, [userId])

  if (!user) {
    return <div>Loading user details...</div>
  }

  return (
    <div>
      <h3>User Details</h3>
      <table>
        <tbody>
          <tr>
            <td>Todo ID:</td>
            <td>{userId}</td>
          </tr>
          <tr>
            <td>Todo Title:</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>User ID:</td>
            <td>{user.id}</td>
          </tr>
          <tr>
            <td>User Name:</td>
            <td>{user.username}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{user.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UserDetails
