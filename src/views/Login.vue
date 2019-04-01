<template>
   <b-row class="container mx-auto mt-5">
    <b-card class="mx-auto w-75">
      <b-row class="justify-content-md-center">
        <b-col sm="12">
          <h1 class="center">Login</h1>
        </b-col>
      </b-row>
      <b-form @submit.prevent="login" >
        <b-form-group id="input-group-1" label="E-mail" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Digite seu e-mail"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Senha: " label-for="input-2">
          <b-form-input id="input-2" type="password" v-model="form.senha" required placeholder="Digite sua senha"></b-form-input>
        </b-form-group>

        <b-button class="w-100" type="submit" variant="success">Enviar</b-button>
      </b-form>
    </b-card>
  </b-row>
</template>

<script>
import { http } from "../services/http"

export default {
  data() {
    return {
      form: {
        email: "",
        senha: ""
      },
      
      
    };
  },
  methods: {
    login() {
      this.$store.dispatch('login', this.form)
      .then(res => {
        if (res.status === 200) {
          this.$toasted
            .show(
              `Bem-vindo ao sistema ${res.data.user.nome}`,
              {
                className: "bg-success"
              }
            )
            .goAway(3000)
            setTimeout(()=> this.$router.push('/'), 2000)
        }
      }).catch(erro => {
        this.$toasted
            .show(
              `${erro.data.erro}`,
              {
                className: "bg-danger"
              }
            )
            .goAway(3000)
      })
    },
   
  }
};
</script>
