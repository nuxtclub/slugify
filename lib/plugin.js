import slugify from 'slugify'

export default (_, inject) => {
	<% if (options.extend) { %>
	slugify.extend(JSON.parse('<%= JSON.stringify(options.extend) %>'))
	<% } %>
	
	inject('slugify', slugify)
}
