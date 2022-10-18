import React, {FC, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {userService} from "../../service/userService";
import {IUser} from "../../interfaces/userInterface";
import User from "../User/User";
import './Users.scss'


const Users:FC = () => {

    const [searchParams] = useSearchParams();
    const [users, setUsers] = useState<IUser[]>([])
    const genderParameter:string|null = searchParams.get('gender')
    const nationalityParameter:string|null = searchParams.get('nat')

    u
    useEffect(()=> {

        (async ()=> {
            const {data} = await userService(genderParameter,nationalityParameter)
            setUsers(data.results)
        })()

    } ,[searchParams])


    return (
        <div className={'usersBlock'}>
            {users.map((user, index) => <User key={index} user={user}/>)}
        </div>
    );
};

export default Users;
