export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '62685ef4d9bbc90085353b03',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-pq8p7j1r',
                  apiId: 'f36d15c2-c62e-42e6-9c8e-99031b0deb77'
                },
                {
                  buildHookId: '62685ef44beb9d00c0bc7133',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6oxmu9o3',
                  apiId: 'ca7f249a-1ab9-4dc8-8b39-e532185b6627'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AJ8931/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6oxmu9o3.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
