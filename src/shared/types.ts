export interface IService {
	name: string;
	uri: string;

	description?: string;
	icon?: IIcon;
}

export interface IIcon {
	href: string;
	title?: string;
	alt?: string;
}

export const FAKE_SERVICES: IService[] = [
	{
		name: "Archivebox",
		uri: "https://archivebox.starbase80.dev",
		description: "Backup webpages",
		icon: {
			href: "/icons/archivebox.jpg",
		},
	},
	{
		name: "Authelia",
		uri: "https://auth.starbase80.dev",
		description: "Authentication",
		icon: {
			href: "/icons/authelia.png",
		},
	},
	{
		name: "Calibre",
		uri: "https://calibre.starbase80.dev",
		description: "eBook library",
		icon: {
			href: "/icons/calibre.png",
		},
	},
	{
		name: "Gitea",
		uri: "https://git.starbase80.dev",
		description: "Code hosting",
		icon: {
			href: "/icons/gitea.svg",
		},
	},
	{
		name: "Jellyfin",
		uri: "https://jellyfin.starbase80.dev",
		description: "Media server",
		icon: {
			href: "/icons/jellyfin.svg",
		},
	},
	{
		name: "Mastodon",
		uri: "https://notclickable.social",
		description: "NotClickable.social",
		icon: {
			href: "/icons/mastodon.jpg",
		},
	},
	{
		name: "Mealie",
		uri: "https://mealie.starbase80.dev",
		description: "Recipe manager",
		icon: {
			href: "/icons/mealie.jpg",
		},
	},
	{
		name: "N8N",
		uri: "https://n8n.starbase80.dev",
		description: "Workflow automation",
		icon: {
			href: "/icons/n8n.jpg",
		},
	},
	{
		name: "MeTube",
		uri: "https://metube.starbase80.dev",
		description: "Archive YouTube",
		icon: {
			href: "/icons/metube.jpg",
		},
	},
	{
		name: "Miniflux",
		uri: "https://miniflux.starbase80.dev",
		description: "RSS server",
		icon: {
			href: "/icons/miniflux.jpg",
		},
	},
	{
		name: "Portainer",
		uri: "https://portainer.starbase80.dev",
		description: "Docker management",
		icon: {
			href: "/icons/portainer.png",
		},
	},
	{
		name: "Roher Twins",
		uri: "https://rohertwins.starbase80.dev",
		description: "Weekly newsletter",
		icon: {
			href: "/icons/ghost.jpg",
		},
	},
	{
		name: "Roher Wiki",
		uri: "https://roherwiki.starbase80.dev",
		description: "Family wiki",
		icon: {
			href: "/icons/wikijs.svg",
		},
	},
	{
		name: "Standard Notes",
		uri: "https://standardnotes.starbase80.dev",
		description: "Knowledge base",
		icon: {
			href: "/icons/standardnotes.png",
		},
	},
	{
		name: "Vaultwarden",
		uri: "https://vaultwarden.starbase80.dev",
		description: "Password manager",
		icon: {
			href: "/icons/vaultwarden.svg",
		},
	},
	{
		name: "Visual Studio Code",
		uri: "https://vscode.starbase80.dev",
		description: "Code editor",
		icon: {
			href: "/icons/vscode.jpg",
		},
	},
	{
		name: "Wallabag",
		uri: "https://wallabag.starbase80.dev",
		description: "Read later",
		icon: {
			href: "/icons/wallabag.png",
		},
	},
	{
		name: "Woodpecker",
		uri: "https://woodpecker.starbase80.dev",
		description: "Continuous integration",
		icon: {
			href: "/icons/woodpecker.jpg",
		},
	},
];
