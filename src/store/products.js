import imitationServer from '@/imitationServer'

const productsStore = {
	namespaced: true,

	state: {
		date: 0,
		list: []
	},

	mutations: {
		sort (state, list) {
			state.list = list
		},

		update (state, list) {
			state.list = list
			state.date = Date.now()
		}
	},

	actions: {
		async update ({ state, commit }) {
			if (Date.now() > state.date + 5000) {
				const list = await imitationServer.getProductsList()
				commit('update', list)
			}
		},

		sort ({ state, commit }) {
			const list = state.list.sort(rSort)
			commit('sort', list)
		},

		getById ({ state }, id) {
			for (const item in state.list) {
				if (item.id === id) {
					return item
				}
			}
		}
	},

	getters: {}
}

export default productsStore

function rSort () {
	return Math.random() - Math.random()
}