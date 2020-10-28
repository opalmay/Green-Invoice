<template>
	<section class="user-welcome">
		<div class="floating">
			<div>
				<h1>שלום {{ firstName }}!</h1>
				<p>ברוך הבא ל-{{ bussinesName }}</p>
			</div>
			<div class="flex space-between column">
				<button class="accept-button" @click="goToInfo">המשך</button>
				<button class="blue-button" @click="logout">התנתקות</button>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	metaInfo: {
		title: 'ברוך הבא'
	},
	computed: {
		loggedInUser() {
			return this.$store.getters.loggedInUser;
		},
		firstName() {
			return this.loggedInUser.firstName;
		},
		bussinesName() {
			return this.loggedInUser.businesses[0].name;
		}
	},
	methods: {
		goToInfo() {
			this.$router.push('/user/info');
		},
		logout() {
			this.$store.dispatch({ type: 'logout' });
			this.$router.push('/login');
		}
	},
	created() {
		if (!this.loggedInUser) this.$router.push('/login');
	}
}
</script>