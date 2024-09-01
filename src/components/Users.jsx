import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MdDelete } from "react-icons/md";
const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    const handleDelete = id =>{
        fetch(`https://coffee-store-server-opal-omega.vercel.app/user/${id}`, {
            method: 'DELETE'
           
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                console.log('Deleted Successfully');
                // remove the user from the ui
                const remainingUsers = users.filter( user => user._id !== id);
                setUsers(remainingUsers);
            }
        })
    }
    return (

        <div className="container mx-auto mt-8 md:mt-10 lg:mt-16">

            <div className="mx-5 md:mx-12">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>CreatedAt</th>
                                <th>Last LoggedIn</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => <tr key={user._id} className="hover">
                                    <th>1</th>
                                    <td>{user.email}</td>
                                    <td>{user.createdAt}</td>
                                    <td>{user.lastLoggedAt}</td>
                                    <td onClick={() => handleDelete(user._id)} className="text-xl text-red-500"><MdDelete /></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;