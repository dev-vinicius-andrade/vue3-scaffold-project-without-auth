import type { RouteRecordRaw } from 'vue-router';
import { useRouteParamsAsProperties } from '@/composables/useRouteParamsAsProperties';
export default [
	{
		path: '',
		name: '/',
		props: useRouteParamsAsProperties,
		component: () => import('@views/home/index.vue'),
	},
	{
		path: '',
		name: '/about',
		props: useRouteParamsAsProperties,
		component: () => import('@views/about/index.vue'),
	},
	{
		path: '',
		name: '/contact',
		props: useRouteParamsAsProperties,
		component: () => import('@views/contact/index.vue'),
	},
] as RouteRecordRaw[];
