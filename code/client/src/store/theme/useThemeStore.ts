import { ThemeEnum } from '@enums/theme';
import { defineStore } from 'pinia';
import { useTypedStorage } from '@composables/useTypedStorage';
import { getAvailableThemes } from '@/helpers';
export interface IThemeStoreData {
	currentTheme: ThemeEnum;
	availableThemes: string[];
}
const defaultData: IThemeStoreData = {
	currentTheme: ThemeEnum.Light,
	availableThemes: getAvailableThemes(),
};
export const useThemeStore = defineStore('ThemeStore', {
	state: () => ({
		data: useTypedStorage<IThemeStoreData>('currentTheme', defaultData),
	}),
	actions: {
		setTheme(theme: ThemeEnum) {
			this.data.currentTheme = theme;
		},
	},
});
