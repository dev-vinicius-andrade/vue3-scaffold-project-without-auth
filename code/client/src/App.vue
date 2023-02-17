<template>
	<Suspense>
		<VLocaleProvider :locale="localeStore.data.currentLocale.locale">
			<VApp>
				<VMain>
					<NavigationBar />

					<RouterView />
				</VMain>
				<Footer />
			</VApp>
			<template v-slot:fallback>
				<VApp>
					<VMain>
						<VContainer v-fill-height fluid v-fill-parent>
							<VRow align="center" justify="center" v-fill-parent>
								<VSpacer />
								<VCol cols="auto"><VProgressCircular indeterminate color="primary" :size="56" /></VCol>
								<VSpacer />
							</VRow>
						</VContainer>
					</VMain>
				</VApp>
			</template>
		</VLocaleProvider>
	</Suspense>
</template>

<script setup lang="ts">
const configurationsStore = useConfigurationsStore();
const localeStore = useLocaleStore();

onMounted(async () => {
	await configurationsStore.get(false);
	document.title = configurationsStore.data?.site.title ?? 'Loading...';
});
const { themeWatcher } = useThemeWatcher();
const { localeWatcher } = useLocaleWatcher();
</script>
