<template>
	<section class="user-login flex space-between">
		<div class="main-login flex column align-center justify-center">
			<div>
				<h2 class="greeting">היי, טוב לראות אותך</h2>
				<form @submit.prevent="login">
					<div class="form-top">
						<fancyInput
							type="text"
							v-model="credentials.email"
							placeholder="מייל"
						/>
						<div class="email-info">
							כתובת המייל איתה נרשמת לחשבונית ירוקה
						</div>
						<fancyInput
							type="password"
							v-model="credentials.password"
							placeholder="סיסמה"
						/>
						<div class="forgot-password">
							<a href="#">שכחת סיסמה?</a>
						</div>
					</div>
					<h3>{{ msg }}</h3>
					<div class="form-buttons-container flex space-between">
						<button class="accept-button">כניסה</button>
						<button
							class="google-button flex align-center justify-center"
						>
							<span>כניסה מהירה</span>
							<img src="../assets/img/Google_G.svg" />
						</button>
					</div>
				</form>
				<div class="trial-link">
					עוד לא הצטרפת?
					<a href="#">ל-30 יום ניסיון חינם</a>
				</div>
			</div>
		</div>
		<div class="hero">
			<!-- <img src="../assets/green_login_page.svg" /> -->
		</div>
	</section>
</template>

<script>
import fancyInput from '../components/fancy-input.cmp.vue';
export default {
	name: 'login',
	metaInfo: {
		title: 'התחברות'
	},
	data() {
		return {
			credentials: {
				email: 'opal.mizrahi2@gmail.com',
				password: 'opal1234',
			},
			msg: '',
		}
	},
	methods: {
		async login() {
			const cred = this.credentials;
			if (!cred.email || !cred.password) return this.msg = 'יש להכניס מייל וסיסמה';
			try {
				await this.$store.dispatch({ type: 'login', userCred: cred });
				this.$router.push('/user/welcome');
			} catch (err) {
				this.msg = err;
			}
		},
	},
	created() {
		const user = this.$store.getters.loggedinUser;
		if (user) this.$router.push('/user/welcome');
	},
	components: {
		fancyInput
	}
}
</script>