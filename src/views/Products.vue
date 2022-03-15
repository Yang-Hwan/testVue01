<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="form-group">
      <label for="">name</label>
      <input type="text" class="form-control"  v-model="product.name"  />
    </div>
    <div class="form-group">
      <label for="">description</label>
      <input type="text" class="form-control"  v-model="product.description"  />
    </div>
    <div class="form-group">
      <label for="">category</label>
      <input type="text" class="form-control"  v-model="product.category"  />
    </div>
    <div class="form-group">
      <label for="">price</label>
      <input type="text" class="form-control"  v-model="product.price"  />
    </div>
    <div class="form-group">
      <label for="">Image</label>
      <input type="file" class="form-control"  @change="onFileSelected"   />
       <p v-if="editMode" class="mt-3">
                Current Image:
                <img :src="productImages + product.image" width="100" />
            </p>
    </div>
    <div class="text-center">
      <button class="btn btn-primary m-1" @click="handleProduct"> SAVE </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      product: {
        name: 'ppp',
        description: 'ddd',
        price: 2.5,
        image: null,
        category: 1
      }
    }
  },
  validations: {
    product: {
      name: { required },
      description: { required },
      price: { required },
      category: { required }
    }
  },
  methods: {
    ...mapActions(['addProduct']),
    onFileSelected (e) {
      this.product.image = e.target.files[0]
    },
    async handleProduct () {
      const product = new FormData()
      console.log(`name: ${this.product.name}, d: ${this.product.description}`)
      product.append('Name', this.product.name)
      product.append('Description', this.product.description)
      product.append('Price', this.product.price)
      product.append('CategoryId', this.product.category)
      //  product.append('Image', this.product.image.name)
      product.append('ImageUpload', this.product.image)
      await this.addProduct(product)
      this.$router.push('/about')
    }
  }
}
</script>
