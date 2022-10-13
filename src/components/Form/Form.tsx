import React, {useState} from 'react';
import {useSearchParams} from "react-router-dom";

import './Form.scss'

const Form = () => {

    const nationality = ["AU", "BR", "CA", "CH", "DE", "DK", "ES", "FI", "FR", "GB", "IE", "IR", "NO", "NL", "NZ", "TR", "US"]
    const gender = ["all", "male", "female"]
    const [nationalityState, setNationalityState] = useState<string[] | any>([])
    const uniqueNat = [...new Set(nationalityState)]
    const [searchParams, setSearchParams] = useSearchParams();

    const onSubmit = (e: any) => {
        e.preventDefault()
        if (uniqueNat.length !== 0 || e.target.gender.value) {
            e.target.gender.value === 'all' ?
                uniqueNat.join(',') === '' ? setSearchParams({})
                    : setSearchParams({nat: uniqueNat.join(',')})
                : uniqueNat.join(',') === '' ? setSearchParams({gender: e.target.gender.value})
                    : setSearchParams({gender: e.target.gender.value, nat: uniqueNat.join(',')})
        }
    }

    const inputHandler = (e:any) => {
        if (e.target.checked === true){
            setNationalityState([...nationalityState, e.target.value.toLowerCase()])
        }else {
            setNationalityState(uniqueNat.filter(nat => nat !== e.target.value.toLowerCase()))
        }
        console.log(nationalityState)

    }

    return (
        <div className={'form'}>
            <form onSubmit={onSubmit}>
                <div className={'gender'}>
                    <p>Gender</p>
                    <select name={'gender'} className="form-select" aria-label="Default select example">
                        {gender.map((value, index) => <option key={index} value={value}>{value} </option>)}
                    </select>
                </div>
                <div className={'nationality'}>
                    <p>Nationality</p>
                    <div>
                        {nationality.map((nat, index) => <div key={index}><input onChange={inputHandler} value={nat} type={"checkbox"} />{nat}</div>)}
                    </div>
                </div>
                <button className="btn btn-primary">Apply filters</button>
            </form>
        </div>
    );
};

export default Form;
