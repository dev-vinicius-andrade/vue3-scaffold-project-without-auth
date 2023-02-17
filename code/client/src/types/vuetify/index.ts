declare const block: readonly ['top', 'bottom'];
declare const inline: readonly ['start', 'end', 'left', 'right'];
export declare type Tblock = typeof block[number];
export declare type Tinline = typeof inline[number];
export declare type Size = string | number | undefined;
export declare type Anchor =
	| Tblock
	| Tinline
	| 'center'
	| 'center center'
	| `${Tblock} ${Tinline | 'center'}`
	| `${Tinline} ${Tblock | 'center'}`;
export declare type ButtonVariant = 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain' | undefined;
export declare type ChipVariant = 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain' | undefined;
export { block, inline };
