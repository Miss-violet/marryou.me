import React, { Component } from 'react';
import { BrowserRouter, Route,Link} from 'react-router-dom';

import Index from './pages/index';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <a href="/abc"> 首页 </a>
            <Route path="/abc" component={Index}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
