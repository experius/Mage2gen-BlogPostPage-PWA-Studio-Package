# Mage2gen BlogPostPage PWA Studio Package

Implementation of the Aheadworks Blog module + Mage2gen_BlogGraphQl to make it PWA ready!

The base code has been generated with Mage2gen and the following manual changes were made:

 - added index.js
 - added README.md
 - added packages.json
 - renamed src to lib
 - added query implementation to the BlogPostPage RootComponent to display the title and content of the Blog Post

## Install in PWA Studio
Install the following package https://www.npmjs.com/package/@lewisvoncken/blogpostpage
use the following command to install the npm package

    ``yarn add @lewisvoncken/blogpostpage``
    
now add the following to the `webpack.config.js` add the end of the special section of `const config = await configureWebpack({`

                '@lewisvoncken/blogpostpage': {
                    esModules: true,
                    graphqlQueries: true,
                    rootComponents: true
                }

## Additional information:

 - Mage2gen BlogGraphQl
    - https://github.com/experius/Mage2-Module-Mage2gen-BlogGraphQl
 - Aheadworks Blog
    - https://ecommerce.aheadworks.com/magento-2-extensions/blog
    - Aheadworks also added GraphQl Support (but has no route for RootComponent)
        https://media.aheadworks.com/catalog/Blog/aheadworks-m2-module-blog-graph-ql-2.5.0.zip
