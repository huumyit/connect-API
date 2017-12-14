import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {

  onDelete = (id) => {
    if (confirm('You must delete it ?')) { //eslint-disable-line
      this.props.onDelete(id);
    }
  }

  render() {
    var {product, index} = this.props;
    var statusName = product.status
      ? 'In stock'
      : 'Out of stock';
    var statusClass = product.status
      ? 'success'
      : 'danger';
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.name}</td>
        <td>{product.price}$</td>
        <td>
          <span className={`label label-${statusClass}`}>
            {statusName}
          </span>
        </td>
        <td>
          <Link 
            className="btn btn-success mb-right-10"
            to={`/product/${product.id}/edit`}
          >
            Edit
          </Link>
          <button 
            type="button" 
            className="btn btn-danger" 
            onClick={ () => this.onDelete(product.id) }
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
