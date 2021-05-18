<template>
  <div>
    <div v-if="loading">
      <page-loading></page-loading>
    </div>
    <transition>
      <div v-if="api" class="conteudo">
        <div>
          <h1>Sobre a {{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
          <router-link class="btn-cursos" tag="button" to="/cursos"
            >Cursos</router-link
          >
          <div>
            <h2>Avaliacoes</h2>
            <ul>
              <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
                <p class="av-nome">
                  {{ avaliacao.nome }} | nota {{ avaliacao.nota }}
                </p>
                <p>{{ avaliacao.descricao }}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="@/assets/aprender.png" alt="aprenda web Design" />
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
import PageLoading from "../components/PageLoading.vue";
export default {
  components: { PageLoading },
  name: "home",
  mixins: [fetchData],

  created() {
    this.fetchData("/home");
  },
};
</script>
<style scoped>
.btn-cursos {
  border: none;
  background: #4b8;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  padding: 15px 40px;
  font-size: 1rem;
  margin: 10px 0px 40px 0px;
  transition: 0.2s;
  border: 1px solid rgb(21, 202, 121);
}
.btn-cursos:hover {
  border: 1px solid rgb(21, 202, 121);
  transform: translateY(6px);
  background: white;
  color: #4b8;
}
.av-nome {
  font-weight: bolder;
}
</style>
