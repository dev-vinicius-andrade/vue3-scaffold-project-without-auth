import { ThemeEnum } from '@enums/theme';
import { ThemeDefinition } from 'vuetify';
export interface ThemeFooterOptions {
	colors?: ThemeFooterColorsOptions;
}
export interface ThemeFooterColorsOptions {
	text?: string;
	socialItems?: string;
}
export interface ThemeDefinitionOptions extends ThemeDefinition {
	footer?: ThemeFooterOptions;
}
export interface ThemeOptions {
	defaultTheme?: string;
	themes?: {
		[key: string]: ThemeDefinitionOptions;
	};
	[key: string]: any;
}
export interface Theme {
	theme: ThemeDefinitionOptions;
	switchTheme: (currentTheme: ThemeEnum) => void;
}
