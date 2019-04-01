<template>
  <b-row class="container mx-auto mt-5">
    <b-card class="mx-auto w-75">
      <b-row class="justify-content-md-center">
        <b-col sm="12">
          <h1 class="center">Cadastro</h1>
        </b-col>
      </b-row>
      <b-form @submit.prevent="cadastrar()">
        <b-form-group id="input-group-1" label="Nome" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.nome"
            type="text"
            required
            placeholder="Digite seu nome"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="E-mail" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.email"
            type="email"
            required
            placeholder="Digite seu e-mail"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Senha: " label-for="input-3">
          <b-form-input
            id="input-3"
            type="password"
            v-model="form.senha"
            required
            placeholder="Digite sua senha"
          ></b-form-input>
        </b-form-group>

        <b-button class="w-100" type="submit" variant="success">Enviar</b-button>
      </b-form>
    </b-card>
  </b-row>
</template>

<script>
import { http } from "../services/http";

export default {
  data() {
    return {
      form: {
        nome: "",
        email: "",
        senha: ""
      }
    };
  },
  methods: {
    cadastrar() {
      this.$store.dispatch('cadastrar', this.form)
      .then(res => {
        if (res.status == 201) {
           this.$toasted
            .show(
              `Usuário ${res.data.nome} criado com sucesso com sucesso`,
              {
                className: "bg-success"
              }
            )
            .goAway(3000);
          this.$store.dispatch('login', this.form).then(res => {
            if (res.status == 200) {
              this.$router.push('/')
            }
          })
        }
      })
      .catch (error => {
        if (error.status === 401) {
          this.$toasted
            .show(
              `Erro ao criar usuário ${this.form.nome}`,
              {
                className: "bg-danger"
              }
            )
            .goAway(3000);
        }
        
      })
    }
  }
};
</script>
