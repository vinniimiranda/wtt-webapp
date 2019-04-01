<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success  " fixed="fixed" :print="true">
      <b-navbar-brand class="mr-3">Pineapple</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav></b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" variant="success">
          <b-nav-item-dropdown right class="bg-success " style=" width: 80%">
            <template slot="button-content" class="w-50">
              <em class="text-white ">
                <i class="fas fa-bell mr-2"></i>
                <b-badge variant="danger">{{ notificacoes.length }}</b-badge>
              </em>
            </template>
            <ul style="overflow: auto; height: 200px; width:100%">
              <b-dropdown-item
                v-for="notificacao in notificacoes"
                :key="notificacao.id"
                style="margin-left: -3rem;"
              >
                <p>Produto {{notificacao.nome}} foi {{notificacao.situacao}} com a descricao: {{notificacao.descricao}}</p>
              </b-dropdown-item>
            </ul>
          </b-nav-item-dropdown>
          <b-nav-item>
            <b-link class="text-white mr-3" :to="{ name: 'Produtos' }">Produtos</b-link>
          </b-nav-item>
          <b-nav-item-dropdown right class="bg-success">
            <!-- Using 'button-content' slot -->
            <template slot="button-content">
              <em class="text-white mr-3">Usuário</em>
            </template>
            <!-- <b-dropdown-item v-if="logado" ><b-link class="mx-3"><i class="fas fa-user my-auto mr-3  " ></i>Perfil</b-link></b-dropdown-item> -->
            <b-dropdown-item v-if="logado">
              <b-link @click="deslogar" class="mx-3">
                <i class="fas fa-power-off my-auto mr-3"></i> Sair
              </b-link>
            </b-dropdown-item>
            <b-dropdown-item v-if="!logado">
              <b-link :to="{ name: 'Cadastro' }" class="mx-3">
                <i class="fas fa-user my-auto mr-3"></i> Cadastro
              </b-link>
            </b-dropdown-item>
            <b-dropdown-item v-if="!logado">
              <b-link :to="{ name: 'Login' }" class="mx-3">
                <i class="fas fa-power-off my-auto mr-3"></i> Login
              </b-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { http } from "../services/http";
export default {
  name: "Header",
  data() {
    return {
      notificacoes: []
    };
  },
  computed: {
    logado() {
      return this.$store.getters.logado;
    }
  },
  methods: {
    deslogar() {
      this.$store.dispatch("deslogar");
      this.$toasted
        .show(`Saindo...`, {
          className: "bg-success"
        })
        .goAway(2000);
    },
    buscaNotificacoes() {
      http.get("/notificacoes").then(res => {
        this.notificacoes = res.data.reverse();
      });
    }
  },
  updated() {
    this.buscaNotificacoes();
  },
  beforeMount() {
    this.buscaNotificacoes();
  }
};
</script>
<style scoped>
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.badge-danger {
  top: -0.6rem;
  position: relative;
  left: -0.7rem;
}
</style>
