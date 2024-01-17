<template>
  <header style="background-color: #03001c; color:#fff;" class="text-center">
    <p class="fw-extrabold header-login" style="font-size: 5rem;">nidmix Provider</p>
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
                <button v-if="step === 1" class="btn btn-outline-dark btn-lg rounded-4 me-2" @click="ChangeToSelect"
                  style="margin-top: 50vh;">Atrás</button>
                <button v-else class="btn btn-outline-dark btn-lg rounded-4 me-2" @click="backStep"
                  style="margin-top: 50vh;">Atrás</button>
              </div>
              <div class="col-8"></div>
            </div>
          </div>
          <div class="col-7">
            <!-- Div para el borde de los campos del login -->
            <div class="rounded-5 border border-3 p-5">
              <!-- Formulario de registro de proveedor -->
              <form class="register" @submit.prevent="registerPro">
                <h1 v-if="step === 1">Informacion personal</h1>
                <h1 v-else-if="step === 2">Sobre tu negocio</h1>
                <h1 v-else>Sobre tus cuentas</h1>
                <br>
                <!-- Agrega campos según la parte del formulario -->
                <div v-if="step === 1">
                  <input type="email" placeholder="Email, usuario o teléfono" v-model="registerPro_form.email"
                    class="form-control" />
                  <h5 class="">Email</h5>
                  <input type="text" placeholder="Nombres" v-model="registerPro_form.firstName" class="form-control" />
                  <h5 class="">Nombre</h5>
                  <input type="text" placeholder="Apellidos" v-model="registerPro_form.lastName" class="form-control" />
                  <h5 class="">Apellidos</h5>
                  <input type="text" placeholder="Nombres" v-model="registerPro_form.User" class="form-control" />
                  <h5 class="">Usuario</h5>
                  <input type="password" placeholder="Contraseña" v-model="registerPro_form.password"
                    class="form-control" />
                  <h5 class="">Contraseña</h5>
                </div>
                <div v-else-if="step === 2">
                  <input type="text" placeholder="buscar..." v-model="registerPro_form.profession" class="form-control" />
                  <h5 class="">platicame a que te dedicas?</h5>
                  <h4>Provee detalles de tu forma de trabajar que puedan atraer a tus clientes</h4>
                  <input type="text" placeholder="choose file (FAKE)" v-model="registerPro_form.credentials"
                    class="form-control" />
                  <h5 class="">Credenciales (Titulos y cretificados)</h5>
                  <input type="text" placeholder="escribe aqui..." v-model="registerPro_form.references"
                    class="form-control" />
                  <h5 class="">Experiencia y referencias</h5>
                  <input type="text" placeholder="escribe aqui..." v-model="registerPro_form.additional"
                    class="form-control" />
                  <h5 class="">Informacion adicional</h5>
                </div>
                <div v-else>
                  <div class="row">
                    <div class="col-5">
                      <h4>Detalles de Pago/Cobro</h4>
                    </div>
                    <div class="col-3"></div>
                    <div class="col-4">
                      <h6>tarjetas de credito/debito</h6>
                    </div>
                  </div>
                  <input type="text" placeholder="Nombres" v-model="registerPro_form.CardName" class="form-control" />
                  <input type="text" placeholder="Apellidos" v-model="registerPro_form.CardLastName"
                    class="form-control" />
                  <h5 class="">Titutlar</h5>
                  <input type="number" placeholder="Numero de tarjeta" v-model="registerPro_form.CardNumber"
                    class="form-control" />
                  <input type="number" placeholder="CVV" v-model="registerPro_form.CardCVV" class="form-control" />
                  <h5 class="">Numero de tarejeta</h5>
                  <input type="text" placeholder="Direccion" v-model="registerPro_form.BillingAddress"
                    class="form-control" />
                  <input type="number" placeholder="Codigo postal" v-model="registerPro_form.BillingPostal"
                    class="form-control" />
                  <h5 class="">Direccion de facturacio</h5>
                  <input type="number" placeholder="Año" v-model="registerPro_form.CardYear" class="form-control" />
                  <input type="number" placeholder="Mes" v-model="registerPro_form.CardMonth" class="form-control" />
                  <h5 class="">Fecha de expiracion</h5>
                  <input type="text" placeholder="Choose file (Fake)" v-model="registerPro_form.OficialID"
                    class="form-control" />
                  <h5 class="">INE</h5>

                </div>
                <br>
                <div class="row align-items-center">
                  <div class="col-1"><input type="checkbox"></div>
                  <div class="col-6">
                    <p>Estoy de acuerdo con los <a href="#">Terminos de uso y condiciones</a></p>
                  </div>
                  <div class="col-5 text-end d-grid">
                    <button v-if="step < 3" @click="nextStep" class="btn btn-lg rounded-4 login-button"
                      type="button">Siguiente</button>
                    <input v-else type="submit" value="Registrar" class="btn btn-lg rounded-4 login-button" />
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
    const registerPro_form = ref({})
    const store = useStore()
    const step = ref(1)

    const registerPro = () => {
      // Puedes enviar toda la información al store o al servidor aquí
      store.dispatch('registerPro', registerPro_form.value)
    }

    const nextStep = () => {
      step.value++
    }

    const backStep = () => {
      step.value--
    }

    return {
      registerPro_form,
      registerPro,
      step,
      nextStep,
      backStep,
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
