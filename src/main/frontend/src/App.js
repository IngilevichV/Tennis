import React, {Fragment} from 'react';
import HomePage from './HomePage';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';



const App = ({store}) => (
      <BrowserRouter>
        <Routing/>
      </BrowserRouter>
);

export default App;
