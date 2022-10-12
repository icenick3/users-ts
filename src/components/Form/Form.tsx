import React, {useState} from 'react';
import {useSearchParams} from "react-router-dom";


const Form = () => {

    const nationality = ["AU", "BR", "CA", "CH", "DE", "DK", "ES", "FI", "FR", "GB", "IE", "IR", "NO", "NL", "NZ", "TR", "US"]
    const gender = ["all","male", "female"]
    const [nationalityState, setNationalityState] = useState<string[]>([])


    const [searchParams, setSearchParams] = useSearchParams();

    const onSubmit = (e:any) => {
        e.preventDefault()
        setNationalityState([])
        setSearchParams({
            gender: e.target.gender.value,
            nat : nationalityState.join(',')
        })
    }

    return (
        <div className={'form'}>
            <form onSubmit={onSubmit}>
                <div className={'gender'}>
                    <p>gender</p>
                    <select name={'gender'}>
                        {gender.map((value,index) => <option key={index} value={value}>{value} </option>)}
                    </select>
                </div>
                <div className={'nationality'}>
                    <p>nationality</p>
                    <select name={'nat'} onChange={(e) => setNationalityState([...nationalityState, e.target.value.toLowerCase()])} multiple>
                        {nationality.map((value, index) => <option key={index} value={value}>{value}</option>)}
                    </select>
                </div>

                <button>Apply filters</button>
            </form>
        </div>
    );
};

export default Form;
