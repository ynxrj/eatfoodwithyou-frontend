<template>
	<div>
		<h2
			class="flex justify-between text-xl font-medium text-gray-800 p-4"
			id="searchTitle"
		>
			Food Recipe name : {{ this.name }}
		</h2>
		<div class="flex flex-wrap w-full">
			<div
				class="pl-6 pb-6"
				v-for="(recipe, index) in recipes.data"
				:key="index"
			>
				<div
					class="
						bg-white
						rounded-lg
						shadow-lg
						h-80
						w-72
						cursor-pointer
					"
					@click="goToRecipe(recipe.id)"
				>
					<img
						v-if="recipe.photo"
						v-bind:src="recipe.photo_url"
						alt=""
						class="rounded-t-lg myImage"
					/>
					<img
						v-else
						src="https://via.placeholder.com/300x225"
						alt=""
						class="rounded-t-lg myImage"
					/>
					<div class="p-6">
						<h2 class="font-semibold mb-2 text-lg text-black">
							{{ recipe.name }}
						</h2>
						<p class="text-black mt-4">
							{{ recipe.user_name }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- <div>
		<h2>Food Recipe name : {{ this.name }}</h2>

		<div
			class="container"
			v-for="(recipe, index) in recipes.data"
			:key="index"
		>
			<div
				class="
					max-w-md
					mx-auto
					bg-white
					rounded-xl
					shadow-md
					overflow-hidden
					md:max-w-2xl
				"
			>
				<div class="md:flex">
					<div class="md:flex-shrink-0">
						<img
							class="h-48 w-full object-cover md:w-48"
							v-bind:src="recipe.photo_url"
							alt="Man looking at item at a store"
						/>
					</div>
					<div class="p-8">
						<router-link
											:to="{
												name: 'FoodRecipeInfor',
												params: { id: recipe.id },
											}"
											class="
												block
												mt-1
												text-lg
												leading-tight
												font-medium
												text-black
												hover:underline
											"
											>{{ recipe.name }}</router-link
										>
						<p class="mt-2 text-gray-500">{{ recipe.detail }}</p>
					</div>
				</div>
			</div>
		</div>
	</div> -->
</template>

<script>
import FoodRecipeService from "@/services/FoodRecipe";
export default {
	data() {
		return {
			name: "",
			recipes: "",
		};
	},
	async created() {
		this.name = this.$route.params.name;
		let SearchedRecipes = await FoodRecipeService.getRecipesFromName(
			this.name
		);
		this.recipes = SearchedRecipes;
		console.log("recipes", this.recipes);
	},
	methods: {
		goToRecipe(id) {
			this.$router.push({
				name: "FoodRecipeInfor",
				params: { id: id },
			});
		},
	},
};
</script>

<style>
.myImage {
	height: 225px;
	width: 300px;
}
</style>
