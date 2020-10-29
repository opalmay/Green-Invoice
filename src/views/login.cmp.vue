<template>
	<section class="user-login flex space-between">
		<div class="main-login flex column align-center justify-center">
			<div>
				<h2 class="greeting">היי, טוב לראות אותך</h2>
				<form @submit.prevent="login">
					<div class="form-top">
						<fancyInput
							type="email"
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
						<button class="accept-button" :disabled="disableForm">
							כניסה
						</button>
						<button
							class="google-button flex align-center justify-center"
							type="button"
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
		<div class="hero"></div>
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
			loading: false,
			msg: '',
		}
	},
	computed: {
		disableForm() {
			return this.loading || !this.validEmail(this.credentials.email) || !this.credentials.password
		}
	},
	methods: {
		async login() {
			this.loading = true;
			try {
				await this.$store.dispatch({ type: 'login', userCred: this.credentials });
				this.$router.push('/user/welcome');
			} catch (err) {
				this.msg = err;
			}
			this.loading = false;
		},
		validEmail(email) {
			var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		}
	},
	components: {
		fancyInput
	}
}
</script>