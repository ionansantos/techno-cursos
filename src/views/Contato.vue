<template>
  <div>
    <div v-if="loading">
      <page-loading></page-loading>
    </div>
    <transition>
      <div v-if="api" class="contato">
        <div>
          <h1 class="titulo">{{ api.titulo }}</h1>
          <p class="descricao">{{ api.descricao }}</p>

          <ul class="form">
            <li>
              <b>Email:</b>
              {{ api.contato.email }}
            </li>
            <li>
              <b>Telefone:</b>
              {{ api.contato.telefone }}
            </li>
            <li>
              <b>Endereço:</b>
              {{ api.contato.endereco }}
            </li>
          </ul>
        </div>
        <div>
          <img src="@/assets/contato.png" alt="contato" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
export default {
  name: "contato",
  mixins: [fetchData],
  created() {
    this.fetchData("/contato");
  },
};
</script>

<style scoped>
.titulo {
  font-size: 3rem;
}
.descricao {
  font-size: 1.3rem;
}
.form li {
  font-size: 1.2rem;
  margin: 30px 0 30px 0;
}
.contato {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
  gap: 30px;
}
@media screen and (max-width: 400px) {
  .contato {
    display: block;
  }
}
</style>