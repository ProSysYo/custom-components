import React from 'react';
import styles from './TableUsers.module.css';

const TableUsers = ({users}) => {
    return (
        <div className={styles.tableWrap}>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.city}</td>
                            <td>{user.phone}</td>
                            <td>Menu</td>
                        </tr>
                    ))}  
                </tbody>              
                
            </table>
        </div>
    );
}

export default TableUsers;