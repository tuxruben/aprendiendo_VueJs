<template>
    <div id="mi-componente">
        <h1>Este es mi compenente</h1>
        <h2>{{subtitulo}}</h2>
        <h2>{{componente}}</h2>
        <ul id="example-1">
            <li v-for="(item, index) in lists" :key="item.id">
                {{index}} {{item.name}} {{item.email}}
            </li>
        </ul>
        <form>
            <label for="title">title: </label>
                 <input type="text" name="title" id="title" v-model="data.title">
            <label for="input3">url: </label>
            <input type="text" name="url" id="input3" v-model="data.url">
            <label for="input4"> <small>description:</small> </label>
            <input type="text" name="description" id="input4" v-model="data.description">
            <button type="button" @click="store()">Agregar</button>
        </form>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: 'MiComponente',
        props: {
            componente: String
        },
        data() {
            return {
                subtitulo: 'Soy el subtitulo del componente',
                lists: [],
                data: {
                    title: "",
                    url: "",
                    description: ""
                }
            }
        },
        mounted() {
            this.getUsers()
        }
        , methods: {
            getUsers: function () {
                axios.get('http://localhost:8080/laravel8/public/api/userIndex' , {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem("token") //the token is a variable which holds the token
                }
            }).then(response => {
                    this.lists = response.data.data
                    console.log(this.lists);
                });
            },
            store: function () {
                axios.post('http://localhost:8080/laravel8/public/api/x', this.data, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token") //the token is a variable which holds the token
                    }
                }).then(y => {
                    console.log(y.data);
                }).catch(err => {
                    if (err.response) {
                        console.log(err.response.statusText);
                    } else {
                        console.log("Revise su coneccion de internet");
                    }
                    if (err.response.status == 403) {
                        console.log("Verifique sus datos");
                    }
                    if (err.response.status == 401) {
                        localStorage.clear();
                        this.$router.push({
                            name: 'mi-componente'
                        });
                    }
                });
            }
        },
    }
</script>