<template>
	<div>
		<slot name="activator" :show="() => setShowDialog(true)" :close="() => setShowDialog(false)" />
		<VDialog
			v-model="componentData.showDialog"
			@click:outside="onClickOutside"
			:width="componentProperties.width"
			:min-width="componentProperties.minWidth"
			:max-width="componentProperties.maxWidth"
			:content-class="contentClass"
			persistent
			transition="slide-x-reverse-transition"
		>
			<VCard v-show="componentData.showDialog" v-fill-parent>
				<VCardTitle v-if="hasTitle" :class="componentProperties.titleClass">
					<VRow justify="center" align="center">
						<slot name="title">
							<span v-if="componentProperties.title">{{ getText(componentProperties.title) }}</span>
						</slot>
						<VSpacer />
						<VCol v-if="componentProperties.showTopCloseButton" cols="1">
							<VBtn
								@click.stop.prevent="() => setShowDialog(false)"
								color="transparent"
								elevation="0"
								size="medium"
							>
								<IconifyMdiClose />
							</VBtn>
						</VCol>
					</VRow>
				</VCardTitle>

				<slot name="body">
					<VCardText v-if="componentProperties.message">
						<slot name="content-prepend" />
						<slot>
							<slot name="content" />
						</slot>
						<slot name="content-append" />
					</VCardText>
				</slot>
				<VCardActions>
					<slot name="actions" :show="() => setShowDialog(true)" :close="() => setShowDialog(false)" />
				</VCardActions>
			</VCard>
		</VDialog>
	</div>
</template>

<script setup lang="ts">
import { Events } from '@enums/events';
import { ILocaleText } from '@/types/locale/text';
export interface IDialogConfirmComponentProperties {
	modelValue?: boolean;
	modelData?: any;
	title?: ILocaleText;
	isActive?: boolean;
	message?: ILocaleText | ILocaleText[];
	showTopCloseButton?: boolean;
	buttonConfirmText?: ILocaleText;
	buttonConfirmColor?: string;
	buttonCancelText?: ILocaleText;
	buttonCancelColor?: string;
	titleClass?: string;
	fillHeight?: boolean;
	persistent?: boolean;
	minWidth?: string | number;
	maxWidth?: string | number;
	width?: string | number;
}

export interface IDialogConfirmComponentEvents {
	(e: Events.onOutsideClicked): void;
	(e: 'update:isActive', val?: boolean): void;
	(e: Events.onModelValueUpdate, visible?: boolean): void;
}

export interface IDialogConfirmComponentData {
	showDialog?: boolean;
}

const componentProperties = withDefaults(defineProps<IDialogConfirmComponentProperties>(), {
	persistent: false,
	fillHeight: true,
	modelValue: false,
	isActive: true,
	message: () => ({ key: 'texts.defaultDialogMessage' }),
	buttonConfirmText: () => ({ key: 'buttons.confirm' }),
	buttonCancelText: () => ({ key: 'buttons.cancel' }),
	showTopCloseButton: false,
	buttonCancelColor: 'terciary',
	buttonConfirmColor: 'primary',
	titleClass: 'pt-2 text-wrap',
	width: 'auto',
	minWidth: 650,
	maxWidth: 650,
});
const componentData = reactive<IDialogConfirmComponentData>({
	showDialog: false,
});
const emits = defineEmits<IDialogConfirmComponentEvents>();
const display = useVuetifyDisplay();
const slots = useSlots();
const hasTitle = computed(() => !!slots['title'] || !!componentProperties?.title);
const contentClass = computed(() => {
	return ['side-dialog', componentProperties.fillHeight ? 'fill-height' : ''].join(' ');
});

function onClickOutside(payload: MouseEvent) {
	emits(Events.onOutsideClicked);
	if (componentProperties.persistent) return;
	setShowDialog(false);
}

watch(
	() => componentData.showDialog,
	showDialog => {
		componentData.showDialog = showDialog;
		emitsDialogVisibleChanges();
	},
);
watch(
	() => componentProperties.modelValue,
	showDialog => {
		componentData.showDialog = showDialog;
	},
);
function setShowDialog(value: boolean) {
	componentData.showDialog = value;
}
function emitsDialogVisibleChanges() {
	if (componentProperties.modelValue === undefined || componentProperties.modelValue === null) return;
	emits('update:isActive', componentData.showDialog);
	emits(Events.onModelValueUpdate, componentData.showDialog);
}
</script>
<style lang="css">
.side-dialog {
	inset-block-start: 0 !important;
	inset-inline-end: 0 !important;
}
</style>
