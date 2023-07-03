import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import mdx from '@mdx-js/rollup';

const config = {
	plugins: [
		react(),
		ssr(),
		{ enforce: 'pre', ...mdx(/* jsxImportSource: …, otherOptions… */) },
	],
	ssr: {
		noExternal: ['styled-components'],
	},
};

export default config;
