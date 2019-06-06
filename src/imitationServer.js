import fake from './fake.json'

const api = {}

if (!localStorage.getItem('productsList')) {
	localStorage.setItem('productsList', JSON.stringify(fake))
}

api.getProductsList = () => {
	return new Promise(async resolve => {
		await delay(getRandom(50, 500))
		
		const json = localStorage.getItem('productsList')
		const productsList = JSON.parse(json)

		resolve(productsList)
	})
}

export default api

function delay (milliseconds) {
	return new Promise(resolve => {
		setTimeout(resolve, milliseconds)
	})
}

function getRandom (min, max) {
	return min + Math.floor(Math.random() * (max - min + 1))
}