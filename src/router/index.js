import Vue from "vue";
import VueRouter from 'vue-router';
import Pokemons from '../components/Pokemons'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Pokemons
    }
]