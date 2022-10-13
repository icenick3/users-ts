import React from 'react';
import './Apps.scss';
import Users from "./components/Users/Users";
import Form from "./components/Form/Form"

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
      <div className={'mainBlock'}>
        <Users/>
          <Form/>
      </div>
  );
}

export default App;
