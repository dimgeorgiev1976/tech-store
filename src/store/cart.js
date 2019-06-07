const cartStore = {
	namespaced: true,

	state: {
		list: [],
		favorites: [],
		goods: [],
		phone: [],
		isPc: [],
		isIpad: [],
		isNotebook: []
	},

	mutations: {
		set (state, { id, count }) {
			const list = state.list

			let item = null

			for (let i = 0; i < list.length; i++) {
				if (list[i].id === id) {
					item = list[i]
					break
				}
			}

			if (!item) {
				item = { id, count: null }
				list.push(item)
			}

			item.count = count

			state.list = list.filter(item => item.count > 0)
			saveToLocalStorage()
		},

		clear (state) {
			state.list = []
			saveToLocalStorage()
		},

		success (state) {
			state.list = []
			saveToLocalStorage()
		},

		favoriteToggle (state, id) {
			if (state.favorites.includes(id)) {
				const index = state.favorites.indexOf(id)
				state.favorites.splice(index, 1)
			} else {
				state.favorites.push(id)
			}

			saveToLocalStorage()
		}
	},

	actions: {
		plus ({ state, commit }, id) {
			for (const item of state.list) {
				if (item.id === id) {
					return commit('set', { id, count: item.count + 1 })
				}
			}

			commit('set', { id, count: 1 })
		},

		minus ({ state, commit }, id) {
			for (const item of state.list) {
				if (item.id === id) {
					if (item.count - 1 > 0) {
						commit('set', { id, count: item.count - 1 })
					}

					return true
				}
			}
		},

		remove ({ commit }, id) {
			commit('set', { id, count: 0 })
		},
		
		success ({ commit }, id) {
			success('set', { id, count: 0 })
		},

		clear ({ commit }) {
			commit('clear')
		},

		// success ({ commit }) {
		// 	commit( 'success' )
		// },

		favoriteToggle ({ commit }, id) {
			commit('favoriteToggle', id)
		}
	},

	getters: {
		order (state, getters, rootState) {
			if (!state.list.length || !rootState.products.list.length) {
				return []
			}

			const order = state.list.map(item => {
				const defaultItem = {
					id: null,
					title: '',
					description: '',
					price: 0
				}

				for (const product of rootState.products.list) {
					if (product.id === item.id) {
						return Object.assign(defaultItem, product, item)
					}
				}
			})

			return order
		},

		totalCount (state) {
			if (!state.list.length) {
				return 0
			}

			const totalCount = state.list.reduce((c, i) => c + i.count, 0)
			return totalCount
		},

		totalPrice (state, getters) {
			if (!getters.order.length) {
				return 0
			}

			const totalPrice = getters.order.reduce((c, i) => c + i.count * i.price, 0)
			return totalPrice
		}
	}
}

if (!localStorage.getItem('cartState')) {
	saveToLocalStorage()
}

cartStore.state = JSON.parse(localStorage.getItem('cartState'))

export default cartStore

function saveToLocalStorage () {
	localStorage.setItem('cartState', JSON.stringify(cartStore.state))
}