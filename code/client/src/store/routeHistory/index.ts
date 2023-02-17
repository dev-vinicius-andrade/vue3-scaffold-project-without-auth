import { defineStore } from 'pinia';
import { IRouterHistoryWrapper } from '@/models/routeHistory/wrapper';
import { useTypedStorage } from '@composables/useTypedStorage';
import { RouteLocationRaw } from 'vue-router';
const defaultLastRoute = { path: '/' } as RouteLocationRaw;
const defaultState: IRouterHistoryWrapper = {
	lastRoute: defaultLastRoute,
};
export const useRouteHistoryStore = defineStore('RouteHistoryStore', {
	state: () => ({
		data: useTypedStorage<IRouterHistoryWrapper>('routeHistory', defaultState),
	}),
	actions: {
		setLastRoute(route: RouteLocationRaw) {
			if (!this.data) this.data = defaultState;
			this.data.lastRoute = route;
		},
	},
});
