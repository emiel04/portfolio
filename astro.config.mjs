// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import compress from "astro-compress";
// https://astro.build/config
export default defineConfig({
	site: "https://emield.be/",
	integrations: [mdx(), sitemap(), icon(), compress()],
	vite: {
		plugins: [tailwindcss()],
	},
});
