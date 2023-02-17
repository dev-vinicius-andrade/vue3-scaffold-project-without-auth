import { createRouter, createWebHistory } from 'vue-router';
import { useImportRoutes } from '@/composables/useImportRoutes';
const routes = [...useImportRoutes(import.meta.glob('@router/routes/**/*.*s', { eager: true }))];
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: () => import('@layouts/default.vue'),
			children: [...routes],
		},
		{
			path: '/site/created/by',
			name: '/site/created/by',
			component: () => import('@layouts/blank.vue'),
			beforeEnter: () => {
				const configurationsStore = useConfigurationsStore();
				if (configurationsStore?.data?.site?.creator?.url)
					window.location.href = configurationsStore.data.site.creator.url;
				else router.push({ name: '/' });
			},
		},
	],
});
export default router;
