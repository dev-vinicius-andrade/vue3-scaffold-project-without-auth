<template>
	<VFooter app>
		<VContainer fluid>
			<VRow no-gutters justify="center" align="center">
				<VCol cols="2" />
				<VCol>
					<span class="font-weight-medium">
						&copy;
						{{ new Date().getFullYear() }}
						Made With
						<IconifyLineMdHeartFilled :color="colors.red.base" size="2.25rem" />
						By
						<RouterLink :to="{ name: '/site/created/by' }" class="text-primary ms-1" target="_blank">
							{{ configurationsStore?.data?.site?.creator?.name }}
						</RouterLink>
					</span>
				</VCol>
				<VCol v-if="configurationsStore?.data?.site?.social" cols="2" class="d-flex justify-space-between">
					<FooterButton
						v-if="configurationsStore?.data?.site?.social?.facebook"
						:href="configurationsStore?.data?.site?.social?.facebook"
						open-in-new-tab
						><IconifyFaFacebookF :color="socialIconsColors"
					/></FooterButton>
					<FooterButton
						v-if="configurationsStore?.data?.site?.social?.instagram"
						:href="configurationsStore?.data?.site?.social?.instagram"
						open-in-new-tab
						><IconifyFaInstagram :color="socialIconsColors"
					/></FooterButton>
					<FooterButton
						v-if="configurationsStore?.data?.site?.social?.youtube"
						:href="configurationsStore?.data?.site?.social?.youtube"
						open-in-new-tab
						><IconifyFaYoutubePlay :color="socialIconsColors"
					/></FooterButton>
					<FooterButton
						v-if="configurationsStore?.data?.site?.social?.linkedin"
						:href="configurationsStore?.data?.site?.social?.linkedin"
						open-in-new-tab
						><IconifyFaLinkedin :color="socialIconsColors"
					/></FooterButton>
				</VCol>
				<VCol cols="2" />
			</VRow>
		</VContainer>
	</VFooter>
</template>
<script setup lang="ts">
import { useConfigurationsStore } from '@store/configurations';
const { theme } = useAppTheme();
const configurationsStore = useConfigurationsStore();
const companyRoute = computed(() => {
	if (configurationsStore?.data?.site?.creator?.url)
		return { path: configurationsStore?.data?.site?.creator?.url, replace: true };
	return { name: '/' };
});
const socialIconsColors = computed(() => theme.footer?.colors?.socialItems);
</script>
