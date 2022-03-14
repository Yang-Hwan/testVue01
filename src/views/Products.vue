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
//  import { mapActions, mapState } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      product: {
        name: null,
        description: null,
        price: null,
        image: null,
        category: null
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
    onFileSelected (e) {
      this.product.image = e.target.files[0]
    },
    async handleProduct () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const product = new FormData()
        product.append('Price', this.product.price)
        product.append('ImageUpload', this.product.image)
        this.$router.push('/products')
      }
    }
  }
}
</script>
