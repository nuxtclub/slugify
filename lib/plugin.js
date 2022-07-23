import slugify from 'slugify'

export default (_, inject) => {
	<% if (options.extend) { %>
	slugify.extend(JSON.parse('<%= JSON.stringify(options.extend) %>'))
	<% } %>

	<% if (options.globals) { %>
	inject('slugify', (string, options) => {
		return slugify(
			string, 
			{ 
				...JSON.parse('<%= JSON.stringify(options.globals) %>'),
				...options, 
			}
		)
	})
	<% else { %>
	inject('slugify', slugify)
	<% } %>
}
