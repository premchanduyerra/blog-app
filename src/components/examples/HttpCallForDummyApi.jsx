import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useMyContext } from './UseContext/MyContext';

export const HttpCallForDummyApi = () => {

    const [users, setUsers] = useState([])
//loading symbol
const [loading,setLoading]=useState(true);

const { state, actions } = useMyContext();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res.data)
               // setLoading(false)
               // setUsers(res.data);
               actions.setUsers(res.data);
            })

    }, [])

    return (
        <div>

{state.loading&&<h1>Loading...</h1>}

            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>City</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.users?.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.address.city}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}