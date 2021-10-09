import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import FoodRecipe from '../services/FoodRecipe';

const end_point = process.env.SHOP_VUE_APP_SHOP_ENDPOINT || 'http://localhost:8000';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        newFoodRecipe :"",
        newCookingProcess : [],
        newIngredient: [],
        allFoodRecipes : [] ,
        currentFoodRecipe : "" ,
    },
    getters:{
        getNewFoodRecipe: state => state.newFoodRecipe,
        getNewCookingProcess: state => state.newCookingProcess,
        getNewIngredient: state => state.newIngredient,
        getAllFoodRecipes: state => state.allFoodRecipes ,
        getCurrentFoodRecipe : state => state.currentFoodRecipe
    },
    mutations: {

        fetch(state , res)
        {
            state.allFoodRecipes = res.data
        }
    },
    actions: {

        async fetchFoodRecipes({commit})
        {
            let res = await FoodRecipe.getFoodRecipe()
            console.log("123");
            console.log(res.foodRecipe.data);
            commit("fetch" , res)

            return res.foodRecipe.data
        } ,

        async fetchCurrentRecipes({commit},id)
        {
            let res = await FoodRecipe.getCurrentRecipe(id)
            console.log("123");
            console.log(res);
            commit("fetch" , res)

            return res.foodRecipe.data
        }
    },
    modules: {
    }
})
  