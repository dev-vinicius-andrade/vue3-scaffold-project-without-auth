import { getCurrentInstance } from 'vue';
import { useDisplay, DisplayInstance } from 'vuetify';
export function useVuetifyDisplay(): DisplayInstance {
	const instance = getCurrentInstance();
	if (!instance) {
		throw new Error(`useVuetify should be called in setup().`);
	}
	return useDisplay();
}
