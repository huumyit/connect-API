import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import callApi from './../../utils/apiCaller';

class ProductActionPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: '',
      txtName: '',
      txtPrice: '',
      chkbStatus: false
    };
  }
  
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name] : value
    });
  }

  onSave = (e) => {
    e.preventDefault();
    var {txtName, txtPrice, chkbStatus} = this.state;
    var { history } = this.props;
    callApi('products', 'POST', {
      name: txtName,
      price: txtPrice,
      status: chkbStatus
    }).then(response => {
      // console.log(response);
      history.goBack();
    })
  }

  render() {
    var {txtName, txtPrice, chkbStatus} = this.state;
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <form onSubmit={this.onSave} >
            <legend>Add product</legend>
            <div className="form-group">
              <label>Product Name:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="txtName"
                value={txtName}
                onChange={this.onChange}/>
            </div>
            <div className="form-group">
              <label>Product Price:
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                name="txtPrice"
                value={txtPrice}
                onChange={this.onChange}/>
            </div>
            <div className="form-group">
              <div className="checkbox">
                <label className="mb-right-10">
                  <input
                    type="checkbox"
                    defaultValue
                    name="chkbStatus"
                    value={chkbStatus}
                    onChange={this.onChange}
                  />
                  In stock
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mb-right-10">Save</button>
            <Link to="/product-list" className="btn btn-danger" >
              Go Back
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default ProductActionPage;
