<template>
	<VAppBar>
		<VAppBarNavIcon v-if="display.smAndDown.value" @click.stop.prevent="toogleNavigationbar" />
		<VAvatar :image="icon" class="ml-5" />
		<NavigationBarMenuButtons
			v-if="display.mdAndUp.value"
			:left-menu-items="leftMenuItems"
			:right-menu-items="rightMenuItems"
			:locale-position="PositionEnum.right"
		/>
	</VAppBar>
	<VNavigationDrawer v-if="display.smAndDown.value" v-model="showNavigationbar">
		<NavigationMenuList :model-value="navigationDrawerMenuItems" />
	</VNavigationDrawer>
</template>
<script setup lang="ts">
import { useTheme } from 'vuetify';
import { IMenu } from '@/types/menu/item';
import iconLight from '@assets/logo/light/logo.svg';
import iconDark from '@assets/logo/dark/logo.svg';
import { PositionEnum } from '@enums/position';

const display = useVuetifyDisplay();
const theme = useTheme();
const icon = computed(() => (theme.current.value.dark ? iconDark : iconLight));
const { menuItemsWithIcons, menuItemsWithoutIcons } = useMenuItems();
const showNavigationbar = ref(false);

const leftMenuItems = computed<IMenu[]>(() =>
	menuItemsWithoutIcons.value.filter(item => !item.position || item.position === PositionEnum.left),
);
const rightMenuItems = computed<IMenu[]>(() => {
	const items = menuItemsWithoutIcons.value.filter(item => item.position && item.position === PositionEnum.right);
	return [...items];
});
const navigationDrawerMenuItems = computed<IMenu[]>(() => [...menuItemsWithIcons.value]);
function toogleNavigationbar() {
	showNavigationbar.value = !showNavigationbar.value;
}
function goToHome() {
	const router = useRouter();
	router.push({ name: '/home' });
}
</script>
