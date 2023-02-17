import { ThemeOptions } from '@/types/theme';

export const theme: ThemeOptions = {
	themes: {
		light: {
			colors: {
				primary: '#1867C0',
				secondary: '#5CBBF6',
			},
			footer: {
				colors: {
					text: colors.grey.darken1,
					socialItems: colors.grey.darken1,
				},
			},
		},
		dark: {
			footer: {
				colors: {
					text: colors.grey.lighten1,
					socialItems: colors.grey.lighten1,
				},
			},
		},
	},
};
