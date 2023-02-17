import { RouteLocationRaw } from 'vue-router';
import { PositionEnum } from '@enums/position';
export interface IMenu {
	title: string;
	to?: RouteLocationRaw;
	position?: PositionEnum;
	prependIcon?: string;
	appendIcon?: string;
}
export declare type Menu = IMenu;
export default Menu;
