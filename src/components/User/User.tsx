import React, {FC} from 'react';

import {IUser} from "../../interfaces/userInterface";
import './User.scss'


interface IProps{
    user:IUser
}

const User:FC<IProps> = ({user:{dob,email,gender,name,nat,picture}}) => {

    return (
        <div className={'userBlock'}>
            <img src={picture.large} alt="picture"/>
            <h4>{name.title} {name.first} {name.last}</h4>
            <p>Gender: {gender}</p>
            <p>Email: <br/>{email}</p>
            <p>Date of Birth: {dob.date.substr(0,10)}</p>
            <p>Nationality: {nat}</p>
        </div>
    );
};

export default User;
