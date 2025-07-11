 ✓ Starting...
 ✓ Compiled middleware in 483ms
 ✓ Ready in 4.3s
 ○ Compiling /[locale] ...
 ✓ Compiled /[locale] in 31.2s
Error: ENVIRONMENT_FALLBACK: There is no `timeZone` configured, this can lead to markup mismatches caused by environment differences. Consider adding a global default: https://next-intl.dev/docs/configuration#time-zone
    at Navbar (src\components\layout\Navbar.tsx:8:28)
   6 |
   7 | export default function Navbar() {
>  8 |   const t = useTranslations('Navbar');
     |                            ^
   9 |
  10 |   return (
  11 |     <header className="bg-gray-900 text-white py-4 px-6 md:px-8"> {
  code: 'ENVIRONMENT_FALLBACK',
  originalMessage: 'There is no `timeZone` configured, this can lead to markup mismatches caused by environment differences. Consider adding a global default: https://next-intl.dev/docs/configuration#time-zone'
}
 GET /es 200 in 38880ms
 ⨯ Error: Cannot find module '@/messages/galaxy-background.jpg.json'
    at moduleContext (C:\Users\cvict\Desktop\AstralIA\client\.next\server\chunks\ssr\[turbopack]_runtime.js:158:19)
    at moduleContext.import (C:\Users\cvict\Desktop\AstralIA\client\.next\server\chunks\ssr\[turbopack]_runtime.js:174:22)
    at LocaleLayout (src\app\[locale]\layout.tsx:13:33)
  11 |
  12 |   // Carga el JSON de traducciones correspondiente
> 13 |   const messages = (await import(`@/messages/${locale}.json`)).default;
     |                                 ^
  14 |
  15 |   return (
  16 |     <html lang={locale}> {
  code: 'MODULE_NOT_FOUND',
  digest: '528357663'
}
 GET /galaxy-background.jpg 500 in 836ms
 ○ Compiling /api/auth/[...nextauth] ...
 ⨯ Error: Cannot find module '@/messages/favicon.ico.json'
    at moduleContext (C:\Users\cvict\Desktop\AstralIA\client\.next\server\chunks\ssr\[turbopack]_runtime.js:158:19)
    at moduleContext.import (C:\Users\cvict\Desktop\AstralIA\client\.next\server\chunks\ssr\[turbopack]_runtime.js:174:22)
    at LocaleLayout (src\app\[locale]\layout.tsx:13:33)
  11 |
  12 |   // Carga el JSON de traducciones correspondiente
> 13 |   const messages = (await import(`@/messages/${locale}.json`)).default;
     |                                 ^
  14 |
  15 |   return (
  16 |     <html lang={locale}> {
  code: 'MODULE_NOT_FOUND',
  digest: '3754406527'
}
 GET /favicon.ico 500 in 2616ms
 ✓ Compiled /api/auth/[...nextauth] in 11.1s
[next-auth][warn][NEXTAUTH_URL] 
https://next-auth.js.org/warnings#nextauth_url
[next-auth][warn][NO_SECRET] 
https://next-auth.js.org/warnings#no_secret
 GET /api/auth/session 200 in 13980ms
 GET /api/auth/session 200 in 196ms
 GET /api/auth/providers 200 in 172ms
 GET /api/auth/csrf 200 in 177ms
[next-auth][error][SIGNIN_OAUTH_ERROR] 
https://next-auth.js.org/errors#signin_oauth_error client_id is required {
  error: {
    message: 'client_id is required',
    stack: 'TypeError: client_id is required\n' +
      '    at new BaseClient (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\.next\\server\\chunks\\node_modules_78900e4f._.js:15295:19)\n' +
      '    at new Client (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\.next\\server\\chunks\\node_modules_78900e4f._.js:16820:13)\n' +
      '    at openidClient (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\.next\\server\\chunks\\node_modules_78900e4f._.js:17297:20)\n' +
      '    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async getAuthorizationUrl (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\.next\\server\\chunks\\node_modules_78900e4f._.js:20246:20)\n' +
      '    at async Object.signin (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\.next\\server\\chunks\\node_modules_78900e4f._.js:20332:30)\n' +
      '    at async AuthHandler (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\.next\\server\\chunks\\node_modules_78900e4f._.js:22644:36)\n' +
      '    at async NextAuthRouteHandler (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\.next\\server\\chunks\\node_modules_78900e4f._.js:25306:30)\n' +
      '    at async NextAuth._args$ (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\.next\\server\\chunks\\node_modules_78900e4f._.js:25341:24)\n' +
      '    at async AppRouteRouteModule.do (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\compiled\\next-server\\app-route-turbo.runtime.dev.js:26:34112)\n' +
      '    at async AppRouteRouteModule.handle (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\compiled\\next-server\\app-route-turbo.runtime.dev.js:26:41338)\n' +
      '    at async doRender (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\base-server.js:1518:42)\n' +
      '    at async DevServer.renderToResponseWithComponentsImpl (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\base-server.js:1920:28)\n' +
      '    at async DevServer.renderPageComponent (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\base-server.js:2408:24)\n' +
      '    at async DevServer.renderToResponseImpl (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\base-server.js:2445:32)\n' +
      '    at async DevServer.pipeImpl (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\base-server.js:1008:25)\n' +
      '    at async NextNodeServer.handleCatchallRenderRequest (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\next-server.js:305:17)\n' +
      '    at async DevServer.handleRequestImpl (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\base-server.js:900:17)\n' +
      '    at async C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\dev\\next-dev-server.js:371:20\n' +
      '    at async Span.traceAsyncFn (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\trace\\trace.js:157:20)\n' +
      '    at async DevServer.handleRequest (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\dev\\next-dev-server.js:368:24)\n' +
      '    at async invokeRender (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\lib\\router-server.js:237:21)\n' +
      '    at async handleRequest (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\lib\\router-server.js:428:24)\n' +
      '    at async requestHandlerImpl (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\lib\\router-server.js:452:13)\n' +
      '    at async Server.requestListener (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\lib\\start-server.js:158:13)',
    name: 'TypeError'
  },
  providerId: 'google',
  message: 'client_id is required'
}
 POST /api/auth/signin/google 200 in 865ms
 GET /api/auth/providers 200 in 413ms
 GET /api/auth/csrf 200 in 686ms
 GET /es 200 in 580ms
 ○ Compiling /_not-found/page ...
 ⨯ Error: Cannot find module '@/messages/galaxy-background.jpg.json'
    at moduleContext (C:\Users\cvict\Desktop\AstralIA\client\.next\server\chunks\ssr\[turbopack]_runtime.js:158:19)
    at moduleContext.import (C:\Users\cvict\Desktop\AstralIA\client\.next\server\chunks\ssr\[turbopack]_runtime.js:174:22)
    at LocaleLayout (src\app\[locale]\layout.tsx:13:33)
  11 |
  12 |   // Carga el JSON de traducciones correspondiente
> 13 |   const messages = (await import(`@/messages/${locale}.json`)).default;
     |                                 ^
  14 |
  15 |   return (
  16 |     <html lang={locale}> {
  code: 'MODULE_NOT_FOUND',
  digest: '528357663'
}
 GET /galaxy-background.jpg 500 in 1497ms
 ✓ Compiled /_not-found/page in 4.8s
 ⨯ Error: Cannot find module '@/messages/favicon.ico.json'
    at moduleContext (C:\Users\cvict\Desktop\AstralIA\client\.next\server\chunks\ssr\[turbopack]_runtime.js:158:19)
    at moduleContext.import (C:\Users\cvict\Desktop\AstralIA\client\.next\server\chunks\ssr\[turbopack]_runtime.js:174:22)
    at LocaleLayout (src\app\[locale]\layout.tsx:13:33)
  11 |
  12 |   // Carga el JSON de traducciones correspondiente
> 13 |   const messages = (await import(`@/messages/${locale}.json`)).default;
     |                                 ^
  14 |
  15 |   return (
  16 |     <html lang={locale}> {
  code: 'MODULE_NOT_FOUND',
  digest: '3754406527'
}
 GET /favicon.ico 500 in 1034ms
 GET /.well-known/appspecific/com.chrome.devtools.json 404 in 329ms
 GET /api/auth/providers 200 in 214ms
 GET /api/auth/csrf 200 in 263ms
[next-auth][error][SIGNIN_OAUTH_ERROR] 
https://next-auth.js.org/errors#signin_oauth_error client_id is required {
  error: {
    message: 'client_id is required',
    stack: 'TypeError: client_id is required\n' +
      '    at new BaseClient (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\.next\\server\\chunks\\node_modules_78900e4f._.js:15295:19)\n' +
      '    at new Client (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\.next\\server\\chunks\\node_modules_78900e4f._.js:16820:13)\n' +
      '    at openidClient (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\.next\\server\\chunks\\node_modules_78900e4f._.js:17297:20)\n' +
      '    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async getAuthorizationUrl (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\.next\\server\\chunks\\node_modules_78900e4f._.js:20246:20)\n' +
      '    at async Object.signin (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\.next\\server\\chunks\\node_modules_78900e4f._.js:20332:30)\n' +
      '    at async AuthHandler (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\.next\\server\\chunks\\node_modules_78900e4f._.js:22644:36)\n' +
      '    at async NextAuthRouteHandler (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\.next\\server\\chunks\\node_modules_78900e4f._.js:25306:30)\n' +
      '    at async NextAuth._args$ (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\.next\\server\\chunks\\node_modules_78900e4f._.js:25341:24)\n' +
      '    at async AppRouteRouteModule.do (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\compiled\\next-server\\app-route-turbo.runtime.dev.js:26:34112)\n' +
      '    at async AppRouteRouteModule.handle (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\compiled\\next-server\\app-route-turbo.runtime.dev.js:26:41338)\n' +
      '    at async doRender (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\base-server.js:1518:42)\n' +
      '    at async DevServer.renderToResponseWithComponentsImpl (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\base-server.js:1920:28)\n' +
      '    at async DevServer.renderPageComponent (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\base-server.js:2408:24)\n' +
      '    at async DevServer.renderToResponseImpl (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\base-server.js:2445:32)\n' +
      '    at async DevServer.pipeImpl (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\base-server.js:1008:25)\n' +
      '    at async NextNodeServer.handleCatchallRenderRequest (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\next-server.js:305:17)\n' +
      '    at async DevServer.handleRequestImpl (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\base-server.js:900:17)\n' +
      '    at async C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\dev\\next-dev-server.js:371:20\n' +
      '    at async Span.traceAsyncFn (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\trace\\trace.js:157:20)\n' +
      '    at async DevServer.handleRequest (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\dev\\next-dev-server.js:368:24)\n' +
      '    at async invokeRender (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\lib\\router-server.js:237:21)\n' +
      '    at async handleRequest (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\lib\\router-server.js:428:24)\n' +
      '    at async requestHandlerImpl (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\lib\\router-server.js:452:13)\n' +
      '    at async Server.requestListener (C:\\Users\\cvict\\Desktop\\AstralIA\\client\\node_modules\\next\\dist\\server\\lib\\start-server.js:158:13)',
    name: 'TypeError'
  },
  providerId: 'google',
  message: 'client_id is required'
}
 POST /api/auth/signin/google 200 in 539ms
