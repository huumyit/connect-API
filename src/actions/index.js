import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchProductRequest = () => {
	return (dispatch) => {
		return callApi('products', 'GET', null).then(response =>{
			dispatch(actFetchProduct(response.data));
		});
	};
}

export const actFetchProduct = (products) => {
	return {
		type: Types.FETCH_PRODUCT,
		products
	}
}

export const actDeleteProductRequest = (id) => {
	return (dispatch) => {
		return callApi(`products/${id}`, 'DELETE', null).then(response =>{
			dispatch(actDeleteProduct(id));
		});
	};
}

export const actDeleteProduct = (id) => {
	return {
		type: Types.DELETE_PRODUCT,
		id
	}
}

export const actAddProductRequest = (product) => {
	return (dispatch) => {
		return callApi('products', 'POST', product).then(response =>{
			dispatch(actAddProduct(response.data));
		});
	};
}

export const actAddProduct = (product) => {
	return {
		type: Types.ADD_PRODUCT,
		product
	}
}