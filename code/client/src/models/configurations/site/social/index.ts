export interface ISiteSocialConfiguration {
	facebook?: string;
	instagram?: string;
	youtube?: string;
	linkedin?: string;
	twitter?: string;
	github?: string;
	discord?: string;
	twitch?: string;
	tiktok?: string;
	pinterest?: string;
	reddit?: string;
	snapchat?: string;
	spotify?: string;
	whatsapp?: string;
	telegram?: string;
	vimeo?: string;
	vk?: string;
	[key: string]: string | undefined;
}
export declare type SiteSocialConfiguration = ISiteSocialConfiguration;
export default SiteSocialConfiguration;
