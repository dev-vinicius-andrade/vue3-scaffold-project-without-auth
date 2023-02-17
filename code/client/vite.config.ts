// Plugins
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

import VueI18n from '@intlify/vite-plugin-vue-i18n';
// Utilities
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import Icons from 'unplugin-icons/vite';
import ViteIconsResolver from 'unplugin-icons/resolver';
// https://vitejs.dev/config/
export default defineConfig({
	server: {
		watch: {
			usePolling: true,
		},
		proxy: {
			'/configurations': {
				target: 'http://localhost:8086',
			},
		},
	},

	plugins: [
		vue(),
		vueJsx(),
		vuetify({
			autoImport: true,
		}),
		AutoImport({
			imports: [
				'vue',
				'vue-router',
				'@vueuse/core',
				'vue-i18n',
				'pinia',
				{
					vuetify: ['useTheme'],
					'vuetify/lib/util/colors': [['default', 'colors']],
				},
			],
			dirs: ['src/store/**', 'src/helpers/**', 'src/enums/**', 'src/composables/**'],
			vueTemplate: true,
			dts: true,
		}),
		Components({
			dirs: ['src/components/**/*'],
			dts: true,
			deep: true,
			extensions: ['vue', 'tsx'],
			collapseSamePrefixes: true,
			directoryAsNamespace: true,
			globalNamespaces: [],
			resolvers: [
				ViteIconsResolver({
					componentPrefix: 'iconify',
					enabledCollections: ['fluent-emoji', 'fluent-emoji-flat', 'fa', 'mdi', 'line-md', 'flagpack', 'ic'],
				}),
			],
		}),
		VueI18n({
			runtimeOnly: false,
			compositionOnly: true,
			include: [fileURLToPath(new URL('./src/plugins/i18n/locales/**', import.meta.url))],
		}),
		Icons({
			compiler: 'vue3',
			autoInstall: true,
		}),
	],
	define: { 'process.env': {} },
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
			'@components': fileURLToPath(new URL('./src/components', import.meta.url)),
			'@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
			'@enums': fileURLToPath(new URL('./src/enums', import.meta.url)),
			'@locales': fileURLToPath(new URL('./src/locales', import.meta.url)),
			'@models': fileURLToPath(new URL('./src/models', import.meta.url)),
			'@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
			'@plugins': fileURLToPath(new URL('./src/plugins', import.meta.url)),
			'@router': fileURLToPath(new URL('./src/router', import.meta.url)),
			'@services': fileURLToPath(new URL('./src/services', import.meta.url)),
			'@store': fileURLToPath(new URL('./src/store', import.meta.url)),
			'@views': fileURLToPath(new URL('./src/views', import.meta.url)),
			'@types': fileURLToPath(new URL('./src/types', import.meta.url)),
			'@theme': fileURLToPath(new URL('./src/theme', import.meta.url)),
		},
		extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
	},
});
