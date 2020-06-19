import { mock } from 'better-mock'

mock('/api/user/info', 'GET', {
  id: 0,
  username: '@lower(@last)',
  nickname: '@cname()',
})
