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
                <button class="btn btn-outline-dark btn-lg rounded-4 me-2" @click="ChangeLogin" style="margin-top: 50vh;">
                  Atrás</button>
              </div>
              <div class="col-8"></div>
            </div>
          </div>
          <div class="col-7">
            <!-- Div para el borde de los campos del login -->
            <div class="rounded-5 border border-3 p-5">
              <!-- Primer rectángulo para clientes -->
              <div class="mb-4">
                <h2 class="mb-3">Usaré esta cuenta para contratar servicios</h2>
                <p>Regístrate y accede a nuestro enorme catálogo de proveedores de servicios especializados en tus necesidades con tan solo un clic!</p>
                <button class="btn btn-dark" @click="ChangeRegisterClient">Crear cuenta cliente</button>
              </div>
              <!-- Segundo rectángulo para proveedores -->
              <div>
                <h2 class="mb-3">Usaré esta cuenta para proveer servicios</h2>
                <p>Regístrate como proveedor y promocionate en nuestra página! Accede a una agenda con todos tus clientes y mantente comunicado con ellos por nuestro chat directo.</p>
                <button class="btn btn-dark" @click="ChangeRegisterProvider">Crear cuenta proveedor</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
  
<script>
export default {
  methods: {
    ChangeLogin() {
      this.$router.push('/login')
    },
    ChangeRegisterClient() {
      this.$router.push('/register')
    },
    ChangeRegisterProvider() {
      this.$router.push('/registerProvider')
    }
  }
}
</script>
  
<style></style>