import { useTheme } from 'vuetify';
import { ThemeEnum } from '@enums/theme';
import { Theme, ThemeDefinitionOptions } from '@/types/theme';
export function useAppTheme(): Theme {
	const vuetifyTheme = useTheme();
	const theme = vuetifyTheme.current.value as ThemeDefinitionOptions;
	function switchTheme(currentTheme: ThemeEnum) {
		const keyIndex = Object.values(ThemeEnum).findIndex(value => value === currentTheme);
		if (keyIndex === -1) return;
		const themeKey = Object.keys(ThemeEnum).find((key, index) => index === keyIndex);
		if (!themeKey) return;
		const theme: ThemeEnum = ThemeEnum[themeKey as keyof typeof ThemeEnum];
		if (!theme) return;
		vuetifyTheme.global.name.value = theme;
	}
	return {
		theme,
		switchTheme,
	};
}
