import Vue from "vue";
import VueRouter from 'vue-router';
import Pokemons from '../components/Pokemons'
import PokemonInfo from '../components/PokemonInfo'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Pokemons
    },
    {
        path: '/pokemon/:id',
        components: PokemonInfo
    }
]

const router = new VueRouter({
    routes
});

export default router;