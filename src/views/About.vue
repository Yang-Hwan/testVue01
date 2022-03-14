<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="form-group">
        <label for="">Username</label>
        <input type="text" class="form-control" v-model="username" />
    </div>
    <div class="form-group">
        <label for="">Password</label>
        <input type="password" class="form-control" v-model="password" />
    </div>
    <div class="text-center">
        <button class="btn btn-primary m-1" @click="handleAuth">
            Log in
        </button>
        <div> abcdefg </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      username: null,
      password: null,
      showFailureMessage: false
    }
  },
  computed: {
    ...mapState({ authenticated: (state) => state.auth.authenticated })
  },
  methods: {
    ...mapActions({ authenticate: 'auth/authenticate' }),
    async handleAuth () {
      await this.authenticate({
        username: this.username,
        password: this.password
      })
      if (this.authenticated) {
        this.$router.push('/admin')
      } else {
        this.showFailureMessage = true
      }
    }
  }
}
</script>
