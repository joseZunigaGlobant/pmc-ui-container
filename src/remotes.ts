const remotes: {
  id: string
  path: string | undefined
  scope: string | undefined
  module: string | undefined
  url: string | undefined
  name: string
  description: string
}[] = [
  {
    id: '4',
    path: '/test',
    scope: 'pmc',
    module: '@pmc/ui-user-profile',
    url: 'http://localhost:3001/ui-user-profile.js',
    name: 'Rates',
    description: 'Rates',
  },
  //   {
  //     id: '5',
  //     path: '/promotions-rules/installments-rules',
  //     scope: 'pmc',
  //     module: '@backoffice/ui-promotions-rules',
  //     url: 'http://localhost:3003/ui-promotions-rules.js',
  //     name: 'Installments Rules',
  //     description: 'Installments Rules',
  //   },
  //   {
  //     id: '7',
  //     path: '/promotions-rules/seller-promotions',
  //     scope: 'pmc',
  //     module: '@backoffice/ui-promotions-rules',
  //     url: 'http://localhost:3003/ui-promotions-rules.js',
  //     name: 'Seller Promotions',
  //     description: 'Seller Promotions',
  //   },
]

export default remotes
