import React, {Component} from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <ul className="nav navbar-nav">
          <li className="active">
            <a>Home</a>
          </li>
          <li>
            <a>List Products</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
