// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';

// https://astro.build/config
export default defineConfig({
	site: 'https://freelance-guide-asp.pages.dev',
	integrations: [
		starlight({
			title: 'Справочник фрилансера',
			defaultLocale: 'root',
			locales: { root: { label: 'Русский', lang: 'ru' } },
			plugins: [
				starlightSidebarTopics([
				{ label: 'Старт', link: '/start/', items: [{ autogenerate: { directory: 'start' } }] },
				{ label: 'Telegram-боты', link: '/telegram-bots/', items: [{ autogenerate: { directory: 'telegram-bots' } }] },
				{ label: 'Парсеры и скрипты', link: '/parsers/', items: [{ autogenerate: { directory: 'parsers' } }] },
				{ label: 'Сайты и лендинги', link: '/websites/', items: [{ autogenerate: { directory: 'websites' } }] },
				{ label: 'Вёрстка по макету', link: '/layout/', items: [{ autogenerate: { directory: 'layout' } }] },
				{ label: 'WordPress', link: '/wordpress/', items: [{ autogenerate: { directory: 'wordpress' } }] },
				{ label: 'Автоматизация', link: '/automation/', items: [{ autogenerate: { directory: 'automation' } }] },
				{ label: 'Данные: Excel, PDF, SQL', link: '/data/', items: [{ autogenerate: { directory: 'data' } }] },
				{ label: 'Тексты и контент', link: '/content/', items: [{ autogenerate: { directory: 'content' } }] },
				{ label: 'Процесс заказа', link: '/process/', items: [{ autogenerate: { directory: 'process' } }] },
				{ label: 'Шаблоны', link: '/templates/', items: [{ autogenerate: { directory: 'templates' } }] },
				{ label: 'Инструменты', link: '/tools/', items: [{ autogenerate: { directory: 'tools' } }] },
				]),
			],
		}),
	],
});
