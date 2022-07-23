# @nuxtclub/slugify

## Setup

1. Add `@nuxtclub/slugify` dependency to your project

```bash
yarn add -D @nuxtclub/slugify # or npm i -D @nuxtclub/slugify
```

2. Add `@nuxtclub/slugify` to the `buildModules` section of `nuxt.config.js`.

:warning: If you are using Nuxt **< v2.9** you have to install the module as a `dependency` (No `--dev` or `--save-dev` flags) and use `modules` section in `nuxt.config.js` instead of `buildModules`.

```javascript
export default {
	buildModules: ['@nuxtclub/slugify'],
}
```

## Globals

You can add global/default options:

```javascript
export default {
	buildModules: ['@nuxtclub/slugify'],
	slugify: {
		globals: {
			lower: true,
		},
	},
}
```

## Extend Slugify

You can extend the supported symbols, or override the existing ones with your own:

```javascript
// nuxt.config.js
export default {
	buildModules: ['@nuxtclub/slugify'],
	slugify: {
		extend: {
			'@': 'at',
		},
	},
}
```

## Typescript support

Add the types to your `"types"` array in `tsconfig.json` after the `@nuxt/types` entry.

:warning: Use `@nuxt/vue-app` instead of `@nuxt/types` for nuxt < 2.9.

```json
{
	"compilerOptions": {
		"types": ["@nuxt/types", "@nuxtclub/slugify"]
	}
}
```

## Usage

This module will inject \$slugify in the context of your application.

Learn more about Slugify [here](https://github.com/simov/slugify)
