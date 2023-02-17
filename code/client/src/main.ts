import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { loadFonts } from '@plugins/webfontloader';
import router from '@router';
import vuetify from '@/plugins/vuetify';
import utils from '@plugins/utils';
import i18n from '@plugins/i18n';

async function main() {
	const app = createApp(App);
	app.use(loadFonts);
	app.use(utils);
	app.use(i18n);
	const pinia = createPinia();
	app.use(pinia);
	app.use(router);
	app.use(vuetify);

	app.mount('#app');
}
main();
