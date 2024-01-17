<template>
  <header style="background-color: #03001c; color:#fff;" class="text-center">
    <p class="fw-bold header-login" style="font-size: 5rem;">nidmix</p>
  </header>
  <main class="login">
    <section class="forms">
      <div class="container">
        <div class="row">
          <div class="col-5">
            <h1>Iniciar sesión</h1>
            <a href="#">
              <h3>¿Olvidaste tu contraseña?</h3>
            </a>
            <div class="row">
              <div class="col-4 d-grid">
                <button class="btn btn-outline-dark btn-lg rounded-4 me-2" style="margin-top: 50vh;"> Atrás</button>
              </div>
              <div class="col-8"></div>
            </div>
          </div>
          <div class="col-7">
            <!-- Div para el borde de los campos del login -->
            <div class="rounded-5 border border-3 p-5">
              <!-- Formulario de login -->
              <form class="login" @submit.prevent="login">
                <h4>Identifícate</h4>
                <input type="email" placeholder="Email, usuario o teléfono" v-model="login_form.email"
                  class="form-control" />
                <br>
                <h4 class="">Contraseña</h4>
                <input type="password" placeholder="Contraseña" v-model="login_form.password" class="form-control" />
                <br>
                <div class="row">
                  <div class="col-5 d-grid">
                    <button class="btn btn-outline-dark btn-lg rounded-4 me-2" @click="ChangeRegister">Crear cuenta</button>
                  </div>
                  <div class="col-2">
                  </div>
                  <div class="col-5 text-end d-grid">
                    <input type="submit" value="Iniciar Sesión" class="btn btn-lg rounded-4 login-button" />
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
    const login_form = ref({})
    const register_form = ref({})
    const store = useStore()

    const login = () => {
      store.dispatch('login', login_form.value)
    }
    const register = () => {
      store.dispatch('register', register_form.value)
    }

    return {
      login_form,
      register_form,
      login,
      register
    }
  },
  methods: {
    ChangeRegister (){
      this.$router.push('/register')
    }
  }
}
</script>

<style></style>