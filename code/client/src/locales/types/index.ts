export type VariationTypes = string | undefined | null;
export interface IVariation {
	text: string;
	Text: VariationTypes;
	textCammelCased: VariationTypes;
	textPascalCased: VariationTypes;
	count: VariationTypes;
	Count: VariationTypes;
	countCammelCased: VariationTypes;
	countPascalCased: VariationTypes;
}
