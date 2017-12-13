import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';

class App extends Component {

  showContentMenus = () => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (<Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}/>);
      });
    }

    return <Switch>{result}</Switch>
  }

  render() {
    return (
      <Router>
        <div>
          {/* Menu */}
          <Menu/>
          <div className="container">
            <div className="row">
              {/* Content */}
              {this.showContentMenus(routes)}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
