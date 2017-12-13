import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">List Products</a>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-large btn-info mb-10">Add product</button>
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">List products</h3>
                </div>
                <div className="panel-body">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>iPhone X</td>
                        <td>500$</td>
                        <td>
                          <span className="label label-success">Active</span>
                        </td>
                        <td>
                          <button type="button" className="btn btn-success mb-right-10">Edit</button>
                          <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
