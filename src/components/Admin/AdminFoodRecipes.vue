<template>
	<div class="bg-gray-200 font-prompt">
		<div>
			<div>
				<div class="text-center py-10 pt-16">
					<h2 class="text-6xl font-bold text-gray-800">
						All Recipes
					</h2>
				</div>
				<div class="flex justify-center">
					<div class="w-full max-w-6xl pb-16">
						<div class="block w-full overflow-x-hidden">
							<table
								class="
									mt-6
									items-center
									bg-transparent
									w-full
									border-collapse
									cursor
									bg-white
									table-fixed
								"
							>
								<thead>
									<tr>
										<th
											class="
												px-6
												bg-blueGray-50
												text-black
												align-middle
												border-b
												border-solid
												border-blueGray-100
												py-3
												text-base
												uppercase
												whitespace-nowrap
												font-medium
												text-center
												w-1/12
											"
										>
											No.
										</th>
										<th
											class="
												px-6
												bg-blueGray-50
												text-black
												align-middle
												border-b
												border-solid
												border-blueGray-100
												py-3
												text-base
												uppercase
												whitespace-nowrap
												font-medium
												text-center
												w-2/12
											"
										>
											Name
										</th>
										<th
											class="
												px-6
												bg-blueGray-50
												text-black
												align-middle
												border-b
												border-solid
												border-blueGray-100
												py-3
												text-base
												uppercase
												whitespace-nowrap
												font-medium
												text-center
												w-2/12
											"
										>
											Photo
										</th>
										<th
											class="
												px-6
												bg-blueGray-50
												text-black
												align-middle
												border-b
												border-r-2
												border-solid
												border-blueGray-100
												py-3
												text-base
												uppercase
												whitespace-nowrap
												font-medium
												text-center
												w-6/12
											"
										>
											Detail
										</th>

										<th
											class="
												px-6
												bg-blueGray-50
												text-transparent
												align-middle
												border-b
												border-solid
												border-blueGray-100
												py-3
												text-base
												uppercase
												whitespace-nowrap
												font-medium
												text-center
											"
										>
											Delete
										</th>
									</tr>
								</thead>

								<tbody>
									<tr
										v-for="(food, index) in foodRecipes"
										:key="index"
										class="cursor-pointer hover:bg-gray-100"
									>
										<td
											class="
												text-center
												px-6
												align-middle
												border-l-0 border-r-2
												text-base
												whitespace-nowrap
												p-4
											"
											@click="goToRecipe(food.id)"
										>
											{{ index + 1 }}
										</td>
										<td
											class="
												text-center
												px-6
												border-l-0 border-r-2
												text-base
												whitespace-nowrap
											"
											@click="goToRecipe(food.id)"
										>
											{{ food.name }}
										</td>
										<td
											class="
												flex
												justify-center
												text-base
												whitespace-nowrap
												py-3
											"
											@click="goToRecipe(food.id)"
											v-if="food.photo_url !== null"
										>
											<img
												v-bind:src="food.photo_url"
												alt=""
												height="150px"
												width="150px"
											/>
										</td>
										<td
											class="
												px-6
												border-l-2
												text-base
												py-2
											"
											@click="goToRecipe(food.id)"
										>
											{{ food.detail }}
										</td>
										<td
											class="
												border-l-2
												text-base
												whitespace-nowrap
											"
										>
											<div
												class="
													flex
													justify-center
													cursor-pointer
													text-red-500
													hover:text-red-400
													duration-100
												"
												@click="
													deleteRecipe(
														food.id,
														food.name
													)
												"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="h-6 w-6"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M6 18L18 6M6 6l12 12"
													/>
												</svg>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import ShopStore from '@/store/Shop'
import Food from "@/store/FoodRecipe";
import AuthUser from "@/store/AuthUser";
export default {
	data() {
		return {
			foodRecipes: [],
			id: "",
		};
	},
	async created() {
		this.fetchFood();
		// if (!this.isAuthen()) {
		//   this.$swal("Please Login before using this feature", "warning");
		//   this.$router.push("/");
		// }
		// else if (!this.isAdmin())
		// {
		//   this.$swal("You not Admin", "warning");
		//   this.$router.push("/");
		// }
	},
	methods: {
		async fetchFood() {
			let res = await Food.dispatch("fetchFoodRecipes");
			this.foodRecipes = res;

			// console.log(456);
			// console.log(this.foodRecipes);
		},

		async deleteRecipe(isid, name) {
			// this.$router.push(`/admin/foodrecipes/${id}`);
			console.log("2");
			console.log(isid);
			swal({
				title: "warning",
				text: `Would you like to Delete ${name} ?`,
				icon: "warning",
				buttons: true,
				dangerMode: true,
			}).then(async (willRedeem) => {
				if (willRedeem) {
					await swal("Successful", {
						icon: "success",
					});
					await Food.dispatch("deleteCurrentRecipes", isid);
					await this.fetchFood();
				} else {
					swal("Canceled");
				}
			});
		},
		isAuthen() {
			return AuthUser.getters.isAuthen;
		},
		isAdmin() {
			return AuthUser.getters.isAdmin;
		},
		goToRecipe(id) {
			this.$router.push({
				name: "FoodRecipeInfor",
				params: { id: id },
			});
		},
	},
};
</script>
<style></style>
