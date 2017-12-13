import React, {Component} from 'react';

class ProductActionPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <form>
            <legend>Add product</legend>
            <div className="form-group">
              <label>Product Name:
              </label>
              <input type="text" className="form-control" placeholder="Name"/>
            </div>
            <div className="form-group">
              <label>Product Price:
              </label>
              <input type="number" className="form-control" placeholder="Price"/>
            </div>
            <div className="form-group">
              <div className="checkbox">
                <label className="mb-right-10">
                  <input type="checkbox" defaultValue/>
                  In stock
                </label>
                {/* <label>
                  <input type="checkbox" defaultValue/>
                  Out of stock
                </label> */}
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ProductActionPage;
