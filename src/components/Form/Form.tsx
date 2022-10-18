import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import './Form.scss';
import { YourFormElement } from '../../interfaces/IForm';

const Form = () => {
  const nationality = ['AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IR', 'NO', 'NL', 'NZ', 'TR', 'US'];
  const gender = ['all', 'male', 'female'];
  const [nationalityState, setNationalityState] = useState<string[]>([]);
  const uniqueNat = [...new Set(nationalityState)];
  const [, setSearchParams] = useSearchParams();

  const onSubmit = (e: React.FormEvent<YourFormElement>) => {
    e.preventDefault();
    if (uniqueNat.length !== 0 || e.currentTarget.elements.gender.value) {
      if (e.currentTarget.elements.gender.value === 'all') {
        if (uniqueNat.join(',') === '') {
          setSearchParams({});
        } else {
          setSearchParams({ nat: uniqueNat.join(',') });
        }
      } else if (uniqueNat.join(',') === '') {
        setSearchParams({ gender: e.currentTarget.elements.gender.value });
      } else {
        setSearchParams({ gender: e.currentTarget.elements.gender.value, nat: uniqueNat.join(',') });
      }
    }
  };

  const inputHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setNationalityState([...nationalityState, e.target.value.toLowerCase()]);
    } else {
      setNationalityState(uniqueNat.filter((nat) => nat !== e.target.value.toLowerCase()));
    }
  };

  return (
        <div className={'form'}>
            <form onSubmit={onSubmit}>
                <div className={'gender'}>
                    <p>Gender</p>
                    <select name={'gender'} id="gender" className="form-select" aria-label="Default select example">
                        {gender.map((value, i) => <option key={i} value={value}>{value}</option>)}
                    </select>
                </div>
                <div className={'nationality'}>
                    <p>Nationality</p>
                    <div>
                        {nationality.map((nat, i) => <div key={i}><input onChange={inputHandler} value={nat} type={'checkbox'} />{nat}</div>)}
                    </div>
                </div>
                <button className="btn btn-primary">Apply filters</button>
            </form>
        </div>
  );
};

export default Form;
