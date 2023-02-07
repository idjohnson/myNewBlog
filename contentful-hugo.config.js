// go to https://github.com/ModiiMedia/contentful-hugo#configuration for configuration instructions

/**
 * @type {import('contentful-hugo').ContentfulHugoConfig}
 */
module.exports = {
    locales: [], // uses default locale if left empty
    singleTypes: [],
    repeatableTypes: [
        {
            id: 'pageBlogPost',
            directory: 'content/posts',
            mainContent: 'content',
            resolveEntries: {
                categories: 'fields.slug',
                author: 'fields.name',
                relatedPosts: 'sys.id',
            },
        },
    ],
};