import { is } from "../shared/is";
import { IService } from "../shared/types";
import { Anchor } from "./anchor";
import { Icon } from "./icon";

interface IServicesProps {
	services: IService[];
}

export const Services = function (props: IServicesProps) {
	const { services } = props;

	return `
		<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 lg:gap-2 lg:gap-y-4">
			${services.map((service, index) => Service({ index, service })).join("")}
		</ul>
	`;
};

interface IServiceProps {
	service: IService;
	index: number;
}

function Service(props: IServiceProps) {
	const { service, index } = props;

	const { name, uri, description, icon, iconBG, iconBubble, iconColor, iconAspect, newWindow } = service;

	return `
		<li class="p-4">
		${Anchor({
			uri,
			newWindow,
			className: "flex gap-4",
			children: `${
				!is.null(icon)
					? `<span class="flex-shrink-0 flex">${Icon({
							name,
							icon,
							uri,
							index,
							iconColor,
							iconBG,
							iconBubble,
							iconAspect,
							newWindow,
						})}</span>`
					: ``
			}
		<div>
			<h3 class="text-lg mt-1 font-semibold line-clamp-1">${name}</h3>
			${!is.null(description) ? `<p class="text-sm text-black/50 dark:text-white/50 line-clamp-1">${description}</p>` : ``}
		</div>`,
		})}
			
		</li>
	`;
}
