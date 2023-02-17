import { ISiteCreatorConfiguration } from '@models/configurations/site/creator/index';
import { ISiteSocialConfiguration } from '@models/configurations/site/social';
export interface ISiteConfiguration {
	name: string;
	title: string;
	description: string;
	creator?: ISiteCreatorConfiguration;
	social?: ISiteSocialConfiguration;
}
export declare type SiteConfiguration = ISiteConfiguration;
export default SiteConfiguration;
