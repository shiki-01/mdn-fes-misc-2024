import flowbite from 'flowbite/plugin';
import typography from '@tailwindcss/typography';

type utilities = {
	[key: string]: {
		[key: string]: string;
	};
};

const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	purge: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	plugins: [
		flowbite,
		typography,
		function ({ addUtilities }: { addUtilities: (newUtilities: utilities, property: string[]) => void }) {
			const newUtilities: utilities = {
				'.text-bg-clip': {
					backgroundClip: 'text',
					WebkitBackgroundClip: 'text',
					color: 'transparent'
				}
			};
			addUtilities(newUtilities, ['responsive', 'hover']);
		}
	],

	darkMode: 'selector',

	theme: {
		extend: {
			colors: {
				primary: {
					50: '#E6E9FF',
					100: '#CDD3FF',
					200: '#9BA8FF',
					300: '#6880FF',
					400: '#3558FF',
					500: '#000EF4',
					600: '#000DBE',
					700: '#000B98',
					800: '#000972',
					900: '#00074C'
				},
				accent: {
					50: '#FEFCE8',
					100: '#FEF9C3',
					200: '#FEF08A',
					300: '#FDE047',
					400: '#FACC15',
					500: '#E8F506',
					600: '#CAE000',
					700: '#AACC00',
					800: '#8AB800',
					900: '#6A9400'
				}
			}
		}
	}
};

module.exports = config;
