import { createStore } from 'vuex'
import AuthModule from './auth'
import Axios from 'axios'

const baseUrl = 'https://localhost:44304'
//  const pagesUrl = `${baseUrl}/api/pages`
//  const categoriesUrl = `${baseUrl}/api/categories`
const productsUrl = `${baseUrl}/api/products`
const productImagesUrl = `${baseUrl}/media/products/`

export default createStore({
  state: {
    products: [],
    productImages: productImagesUrl
  },
  mutations: {
  },
  actions: {
    async addProduct (context, product) {
      await Axios.post(productsUrl, product)
    }
  },
  modules: {
    auth: AuthModule
  }
})
