import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Homepage from "./pages/Homepage/Homepage";


function App() {
  return (
    <div>
        <Switch>
            <Route path={'/'} exact render={() => <Homepage/>}/>
        </Switch>
    </div>
  );
}

export default App;
