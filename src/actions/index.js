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