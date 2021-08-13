import slugify from 'slugify'

declare module '@nuxt/vue-app' {
	interface Context {
		$slugify: typeof slugify
	}
}

declare module '@nuxt/types' {
	interface Context {
		$slugify: typeof slugify
	}
}

declare module 'vue/types/vue' {
	interface Vue {
		$slugify: typeof slugify
	}
}

declare module 'vuex/types/index' {
	interface Store<S> {
		$slugify: typeof slugify
	}
}
