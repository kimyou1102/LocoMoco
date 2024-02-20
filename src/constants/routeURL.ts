export const routes = {
  home: '/',
  create: '/create',
  chat: '/chat',
  mypage: '/mypage',
  search: '/search',
} as const;

// TODO: 헤더에 필요한 타이틀 url과 맵핑[24/02/14]
export const titleMap = {
  chat: '채팅',
  create: '모각코 생성',
  mgc: '모각코 디테일',
} as const;