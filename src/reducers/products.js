var initialState = [
	{
			"id": 1,
			"name": "iPhone X",
			"price": "500",
			"status": true
	},
	{
			"id": 2,
			"name": "iPhone 6",
			"price": "300",
			"status": true
	},
	{
			"id": 3,
			"name": "iPhone 7",
			"price": "400",
			"status": false
	},
	{
			"id": 4,
			"name": "Samsung Galaxy s7",
			"price": "700",
			"status": true
	}
];

const products = (state = initialState, action) => {
	switch (action.type) {
	
		default:
			return [...state];
	}
}

export default products;