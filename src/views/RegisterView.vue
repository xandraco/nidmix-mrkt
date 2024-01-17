<template>
  <header style="background-color: #03001c; color:#fff;" class="text-center">
    <p class="fw-bold header-login" style="font-size: 5rem;">nidmix</p>
  </header>
  <main class="login">
    <section class="forms">
      <div class="container">
        <div class="row">
          <div class="col-5">
            <h1>Para crear tu cuenta...</h1>
            <h3>Primero necesitamos que nos cuentes sobre ti...</h3>
            <div class="row">
              <div class="col-4 d-grid">
                <button class="btn btn-outline-dark btn-lg rounded-4 me-2" @click="ChangeToSelect" style="margin-top: 50vh;">Atrás</button>
              </div>
              <div class="col-8"></div>
            </div>
          </div>
          <div class="col-7">
            <!-- Div para el borde de los campos del login -->
            <div class="rounded-5 border border-3 p-5">
              <!-- Formulario de login -->
              <form class="register" @submit.prevent="register">
                <h1>Registro de cliente</h1>
                <br>
                <input type="email" placeholder="Email, usuario o teléfono" v-model="register_form.email"
                  class="form-control" />
                <h5 class="">Email</h5>
                <input type="text" placeholder="Nombres" v-model="register_form.firstName" class="form-control" />
                <h5 class="">Nombre</h5>
                <input type="text" placeholder="Apellidos" v-model="register_form.lastName" class="form-control" />
                <h5 class="">Apellidos</h5>
                <input type="text" placeholder="Nombre de usuario" v-model="register_form.User" class="form-control" />
                <h5 class="">Usuario</h5>
                <input type="password" placeholder="Contraseña" v-model="register_form.password" class="form-control" />
                <h5 class="">Contraseña</h5>
                <br>
                <div class="row">
                  <div class="col-7">
                  </div>
                  <div class="col-5 text-end d-grid">
                    <input type="submit" value="REGISTRARSE" class="btn btn-lg rounded-4 login-button" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
  
<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const register_form = ref({})
    const store = useStore()
    const register = () => {
      store.dispatch('register', register_form.value)

    }
    return {
      register_form,
      register
    }
  },
  methods: {
    ChangeToSelect() {
      this.$router.push('/newAccount')
    }
  }
}
</script>
  
<style></style>