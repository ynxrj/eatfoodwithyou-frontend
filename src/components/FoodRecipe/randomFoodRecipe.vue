<template>
	<div>
		<div class="flex justify-center ml-12 mt-6">
			<div class="w-5/6 h-full lg:flex justify-end">
				<div
					class="
						h-48
						lg:h-80 lg:w-80
						flex-none
						bg-cover bg-center
						rounded-t
						lg:rounded-t-none lg:rounded-l
						text-center
						overflow-hidden
						cursor-pointer
					"
					@click="goToRecipe()"
					v-bind:style="{
						backgroundImage:
							'url(' + this.foodRecipe.photo_url + ')',
					}"
					title="foodPic"
					id="recomendFood"
				></div>
				<div
					class="
						lg:w-3/5
						w-autof
						bordor-0
						bg-white
						rounded-b
						lg:rounded-b-none lg:rounded-r
						p-4
						flex flex-col
						justify-between
						leading-normal
						cursor-pointer
					"
					@click="goToRecipe()"
				>
					<div class="mb-8">
						<p class="text-lg text-gray-600 flex items-center">
							Recommended
						</p>
						<div class="text-gray-900 font-bold text-4xl mb-2">
							{{ this.foodRecipe.name }}
						</div>
						<p class="text-gray-700 text-2xl">
							{{ this.foodRecipe.detail }}
						</p>
					</div>
					<div class="flex items-center">
						<div class="text-lg">
							<p class="text-gray-900 leading-none">
								{{ this.foodRecipe.user_name }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import FoodRecipeItem from "./foodRecipeItem.vue";
export default {
	components: { FoodRecipeItem },
	data() {
		return {
			randomFoodRecipe: "",
			endPoint: process.env.VUE_APP_SHOP_ENDPOINT,
			foodRecipe: "",
		};
	},
	methods: {
		async fetchRandomFoodRecipes() {
			let res = await axios.get(`${this.endPoint}/api/recipes/randoms`);
			// console.log(res);
			this.randomFoodRecipe = res.data.data;
			// console.log(this.randomFoodRecipe);
		},
		async fetchRandomFoodRecipe() {
			let res = await axios.get(`${this.endPoint}/api/recipes/random`);
			// console.log(res);
			this.foodRecipe = res.data.data;
			if (
				this.foodRecipe.photo_url ===
				`${this.endPoint}/storage/foodRecipe/`
			)
				this.foodRecipe.photo_url =
					"https://via.placeholder.com/250x250";
			// console.log(this.randomFoodRecipe);
		},

		goToRecipe() {
			this.$router.push({
				name: "FoodRecipeInfor",
				params: { id: this.foodRecipe.id },
			});
		},
	},

	async created() {
		await this.fetchRandomFoodRecipes();
		await this.fetchRandomFoodRecipe();
	},
};
</script>

<style>
#flex {
	display: flex;
	flex-wrap: wrap;
}
</style>
