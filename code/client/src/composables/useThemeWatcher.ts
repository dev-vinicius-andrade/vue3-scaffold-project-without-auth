export function useThemeWatcher() {
	const { switchTheme } = useAppTheme();
	const themeStore = useThemeStore();

	const themeWatcher = watch(
		() => themeStore.data.currentTheme,
		currentTheme => switchTheme(currentTheme),
	);
	switchTheme(themeStore.data.currentTheme);
	return {
		themeWatcher,
	};
}
