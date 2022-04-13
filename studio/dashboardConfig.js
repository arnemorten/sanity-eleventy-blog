export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '625712fc3f0cbd18601d55f2',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-fs1rbai6',
                  apiId: '62e85725-8fe8-40ba-9ec1-fa1245cf1ce4'
                },
                {
                  buildHookId: '625712fc2411c817d7ae98f1',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-59yum3nt',
                  apiId: '26da7c99-3716-4ce4-b581-8d3c4c88d6da'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arnemorten/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-59yum3nt.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
