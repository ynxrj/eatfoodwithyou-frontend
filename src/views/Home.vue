<template>
	<div class="home">
		<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
		<HelloWorld />
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import RandomFoodRecipe from "@/components/FoodRecipe/randomFoodRecipe.vue";

export default {
	name: "Home",
	components: {
		HelloWorld,
		RandomFoodRecipe,
	},
};
</script>
