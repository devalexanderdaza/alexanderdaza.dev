export interface NavLink {
	path: string;
	label: string;
}

export interface SocialLink {
	name: string;
	url: string;
	icon?: string;
}

export interface Skill {
	name: string;
	checked: boolean;
	category?: string;
}
