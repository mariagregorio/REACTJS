import React from 'react'
import Card from '../UI/Card/Card'
import styles from './UsersList.module.css'

const UsersList = ({ users }) => {
  return (
    <Card>
      <h3>Users</h3>
      {users.map(user => <div key={user.id} className={styles.item}><span>{user.username}</span> ({user.age} years old)</div>)}
    </Card>
  )
}

export default UsersList