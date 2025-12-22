export default defineEventHandler((event) => {
  // ベーシック認証を適用しないパス（静的ファイルなど）
  const url = event.node.req.url || ''
  if (url.startsWith('/_nuxt/') || url.startsWith('/favicon.ico')) {
    return
  }

  const authHeader = event.node.req.headers.authorization

  // 環境変数から認証情報を取得
  const username = process.env.BASIC_AUTH_USER || 'admin'
  const password = process.env.BASIC_AUTH_PASSWORD || 'password'

  if (!authHeader) {
    event.node.res.statusCode = 401
    event.node.res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"')
    event.node.res.end('Unauthorized')
    return
  }

  const auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':')
  const user = auth[0]
  const pass = auth[1]

  if (user !== username || pass !== password) {
    event.node.res.statusCode = 401
    event.node.res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"')
    event.node.res.end('Unauthorized')
    return
  }
})
