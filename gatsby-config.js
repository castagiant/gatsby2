module.exports = {
  siteMetadata: {
    title: "David Sweetman",
    author: " ",
    description: " "
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
	
	/*resolve: `gatsby-source-instagram-all`,
	options: {
		access_token: "14008449020.1677ed0.a3314d3735874bf098a886c8ac6cd493"
  } */
	

    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
