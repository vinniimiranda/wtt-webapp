<template>
  <b-row class="container mx-auto">
    <b-card class="">
      <b-row class="">
        <b-col sm="12">
          <h1 class="center">Produtos</h1>
        </b-col>
        <b-col class="mt-3">
          <b-button variant="success" @click="show=true, produto={'id': '', 'nome': '', 'descricao': ''}">Novo Produto</b-button>
        </b-col>
      </b-row>

      <b-row>
        <div v-if="show" class="mt-5 mx-auto mb-5">
          <b-card>
            <b-form inline @submit.prevent="salvaProduto()" method="post" :validated="true">
              <label class="sr-only" for="inline-form-input-nome">Nome</label>
              <b-input
                id="inline-form-input-nome"
                v-model="produto.nome"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Nome do Produto"
                required
                :readonly="!logado"
              ></b-input>

              <label class="sr-only" for="inline-form-input-descricao">Descrição</label>
              <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                <b-input
                  id="inline-form-input-descricao"
                  v-model="produto.descricao"
                  placeholder="Descrição do produto"
                  required 
                  :readonly="!logado"
                ></b-input>
              </b-input-group>

              <b-button type="submit" variant="success" :disabled="!logado" >Salvar</b-button>
            </b-form>
          </b-card>
        </div>
      </b-row>
      <b-row class="mt-5">
        <b-col md="6" lg="6" offset-md="6" offset-lg="6" class="my-1">
          <b-form-group label-cols-sm="3" label="Pesquisa" class="mb-3">
            <b-input-group>
              <b-form-input v-model="pesquisa" placeholder="Digite a pesquisa"></b-form-input>
              <b-input-group-append>
                <b-button :disabled="!pesquisa" @click="pesquisa = ''">Limpar</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>

        <b-table  ref="table"
          show-empty
          responsive
          :striped="striped"
          :bordered="bordered"
          :borderless="borderless"
          :outlined="outlined"
          :small="small"
          :hover="hover"
          :dark="dark"
          :fixed="fixed"
          :foot-clone="footClone"
          :items="filtro"
          :fields="fields"
          :sort-by="sortBy"
          :sort-desc="sortDesc"
          :centered="centered"
        >
          <template slot="empty">
            <span>Sem itens para mostrar</span>
          </template>
          <template slot="editar" slot-scope="row">
            <b-button variant="success" size="sm" @click="editaProduto(row)" class="mr-1">
              <i class="fas fa-edit"></i>
            </b-button>
          </template>
          <template slot="remover" slot-scope="row">
            <b-button variant="danger" size="sm" @click="deletaProduto(row)" class="mr-1" :disabled="!logado"> 
              <i class="fas fa-trash"></i>
            </b-button>
          </template>
        </b-table>

        <b-col sm="6" c offset-sm="6" md="4" lg="4" offset-md="8" offset-lg="8" class="my-1">
          <b-form-group label-cols-sm="3" label="Exibir " class="mb-0 mx-auto">
            <b-form-select v-model="perPage" class="mx-auto" :options="pageOptions"></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
    </b-card>
  </b-row>
</template>

<script>
import { http } from "../services/http"

export default {
  components: {},

  name: "Produtos",
  data() {
    return {
      fields: [
        { key: "id", label: "#", sortable: true },
        { key: "nome", label: "Nome", sortable: true },
        { key: "descricao", label: "Descrição", sortable: true },
        { key: "createdAt", label: "Data de criação", sortable: true },
        { key: "editar", label: "Editar" },
        { key: "remover", label: "Remover" }
      ],
      sortBy: "id",
      sortDesc: true,
      striped: false,
      centered: true,
      bordered: false,
      borderless: false,
      outlined: false,
      small: false,
      hover: true,
      dark: false,
      fixed: false,
      footClone: false,
      pageOptions: [5, 10, 15],
      perPage: 5,
      show: false,
      produto: {
        id: "",
        nome: "",
        descricao: ""
      },
      produtos: [],
      pesquisa: ""
    }
  },
  computed: {
    filtro: function() {
      return this.produtos.filter(produto => {
        return (
          produto.nome.match(this.pesquisa) ||
          produto.descricao.match(this.pesquisa)
        )
      })
    },
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key }
        })
    },
    logado() {
        return this.$store.getters.logado;
      },
  },
  methods: {
    async buscaProdutos() {
      const requestProdutos = await http.get("/produto")
      this.produtos = requestProdutos.data
      this.$refs.table.refresh()

    },
    async editaProduto(row) {
      this.show = true
      this.produto.id = row.item.id
      this.produto.nome = row.item.nome
      this.produto.descricao = row.item.descricao
    },
    async salvaProduto() {
      if (this.produto.id == undefined || this.produto.id == null || this.produto.id == '') {
        const salvaProduto = await http.post('/produto', this.produto)
        if (salvaProduto.status == 201) {
          this.$toasted
            .show(`Item ${salvaProduto.data.nome} criado com sucesso com sucesso`, {
              className: "bg-success"
            })
            .goAway(3000)
          this.buscaProdutos()
        }
      }
      else{
        const atualizaProduto = await http.patch(`/produto/${this.produto.id}`, this.produto)
        if (atualizaProduto.status == 200) {
          this.$toasted
            .show(`Item ${atualizaProduto.data.nome} atualizado com sucesso com sucesso`, {
              className: "bg-success"
            })
            .goAway(3000)
          this.buscaProdutos()
        }
      }
      this.show = false
    },
    async deletaProduto(row) {
      const requestDelete = await http.delete(`/produto/${row.item.id}`)

      if (requestDelete.status == 200) {
        this.$toasted
          .show(`Item ${row.item.nome} deletado com sucesso`, {
            className: "bg-success"
          })
          .goAway(3000)
        this.buscaProdutos()
      }
    }
  },
  beforeMount() {
    this.buscaProdutos()
  }
}
</script>
