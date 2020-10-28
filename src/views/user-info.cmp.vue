<template>
	<section class="user-info flex column justify-center align-center">
		<div class="tabs">
			<tabGroup :tabs="tabs" v-model="activeTab" />
			<div class="tabbed-content">
				<template v-if="activeTab === 'details'">
					<ul class="clean-list flex wrap">
						<li>
							<label>שם מלא</label>
							<h3>{{ fullName }}</h3>
						</li>
						<li>
							<label>תז</label>
							<h3>{{ idNumber }}</h3>
						</li>
						<li>
							<label>אימייל</label>
							<h3>{{ email }}</h3>
						</li>
						<li>
							<label>מספר טלפון</label>
							<h3>{{ phone }}</h3>
						</li>
					</ul>
				</template>
				<template v-if="activeTab === 'business'">
					<ul class="clean-list flex wrap">
						<li>
							<label>שם העסק</label>
							<h3>{{ bussinesName }}</h3>
						</li>
						<li>
							<label>תאריך עדכון אחרון</label>
							<h3>{{ bussinesLastUpdateDate }}</h3>
						</li>
						<li>
							<label>עיר</label>
							<h3>{{ bussinesCity }}</h3>
						</li>
						<li>
							<label>כתובת</label>
							<h3>{{ bussinesAddress }}</h3>
						</li>
					</ul>
				</template>
			</div>
		</div>
	</section>
</template>

<script>
import fancyInput from '../components/fancy-input.cmp.vue';
import tabGroup from '../components/tab-group.cmp.vue';
export default {
	data() {
		return {
			tabs: [
				{
					key: 'details',
					label: 'פרטים אישיים',
				},
				{
					key: 'business',
					label: 'פרטי העסק',
				}
			],
			activeTab: 'details'
		}
	},
	computed: {
		loggedInUser() {
			return this.$store.getters.loggedInUser;
		},
		fullName() {
			return this.loggedInUser.firstName + ' ' + this.loggedInUser.lastName;
		},
		idNumber() {
			return this.loggedInUser.idNumber;
		},
		email() {
			return this.loggedInUser.email;
		},
		phone() {
			return this.loggedInUser.phone;
		},
		signUpDate() {
			return this.loggedInUser.signUpDate;
		},
		bussines() {
			return this.loggedInUser.businesses[0];
		},
		bussinesName() {
			return this.bussines.name;
		},
		bussinesAddress() {
			return this.bussines.address;
		},
		bussinesCity() {
			return this.bussines.city;
		},
		bussinesLastUpdateDate() {
			return new Date(this.bussines.lastUpdateDate * 1000).toDateString();
		}
	},
	created() {
		if (!this.loggedInUser) this.$router.push('/login');
	},
	components: {
		fancyInput,
		tabGroup
	}
}
</script>