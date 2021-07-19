<template>
   <header>
       <nav>
           <div  class="logo">
               <router-link to="/">Tecnho</router-link>
           </div>
           <ul>
               <li>
                   <router-link to="/cursos">Cursos</router-link>
               </li>
               <li>
                   <router-link to="/contato">Contato</router-link>
               </li>
           </ul>
       </nav>
   </header>
</template>

<script>
export default {
    name:"theheader"
}
</script>

<style scoped>

.logo a{
  font-size: 2rem;
  color: white;
}
.logo{
    flex: 1;
}
.router-link-active{     
  /* exact cor somente no link ativo */
  color: #4b8;
}

header{
    background: #234;

}
header a  {
    color: white;
}
ul li {
    display: inline-block;
}

li a{
    padding: 0 10px;
    margin-left: 10px;
}
nav{
    max-width:800px;
    margin:  0 auto;
    display: flex;
    align-content: space-between;
    padding: 20px;
}
/* json-server --watch api.json */

</style>