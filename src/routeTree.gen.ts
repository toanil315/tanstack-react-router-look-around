/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as AuthImport } from './routes/_auth'
import { Route as AuthenticatedPostsIndexImport } from './routes/_authenticated/posts/index'

// Create Virtual Routes

const AuthenticatedIndexLazyImport = createFileRoute('/_authenticated/')()
const AuthenticatedPostsRouteLazyImport = createFileRoute(
  '/_authenticated/posts',
)()
const AuthSignUpIndexLazyImport = createFileRoute('/_auth/sign-up/')()
const AuthLoginIndexLazyImport = createFileRoute('/_auth/login/')()
const AuthenticatedPostsIdRouteLazyImport = createFileRoute(
  '/_authenticated/posts/$id',
)()
const AuthenticatedPostsIdIndexLazyImport = createFileRoute(
  '/_authenticated/posts/$id/',
)()
const AuthenticatedPostsIdEditRouteLazyImport = createFileRoute(
  '/_authenticated/posts/$id/edit',
)()

// Create/Update Routes

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedIndexLazyRoute = AuthenticatedIndexLazyImport.update({
  path: '/',
  getParentRoute: () => AuthenticatedRoute,
} as any).lazy(() =>
  import('./routes/_authenticated/index.lazy').then((d) => d.Route),
)

const AuthenticatedPostsRouteLazyRoute =
  AuthenticatedPostsRouteLazyImport.update({
    path: '/posts',
    getParentRoute: () => AuthenticatedRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/posts/route.lazy').then((d) => d.Route),
  )

const AuthSignUpIndexLazyRoute = AuthSignUpIndexLazyImport.update({
  path: '/sign-up/',
  getParentRoute: () => AuthRoute,
} as any).lazy(() =>
  import('./routes/_auth/sign-up/index.lazy').then((d) => d.Route),
)

const AuthLoginIndexLazyRoute = AuthLoginIndexLazyImport.update({
  path: '/login/',
  getParentRoute: () => AuthRoute,
} as any).lazy(() =>
  import('./routes/_auth/login/index.lazy').then((d) => d.Route),
)

const AuthenticatedPostsIndexRoute = AuthenticatedPostsIndexImport.update({
  path: '/',
  getParentRoute: () => AuthenticatedPostsRouteLazyRoute,
} as any).lazy(() =>
  import('./routes/_authenticated/posts/index.lazy').then((d) => d.Route),
)

const AuthenticatedPostsIdRouteLazyRoute =
  AuthenticatedPostsIdRouteLazyImport.update({
    path: '/$id',
    getParentRoute: () => AuthenticatedPostsRouteLazyRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/posts/$id_/route.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthenticatedPostsIdIndexLazyRoute =
  AuthenticatedPostsIdIndexLazyImport.update({
    path: '/',
    getParentRoute: () => AuthenticatedPostsIdRouteLazyRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/posts/$id_/index.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthenticatedPostsIdEditRouteLazyRoute =
  AuthenticatedPostsIdEditRouteLazyImport.update({
    path: '/edit',
    getParentRoute: () => AuthenticatedPostsIdRouteLazyRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/posts/$id_/edit/route.lazy').then(
      (d) => d.Route,
    ),
  )

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_auth': {
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated': {
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/posts': {
      preLoaderRoute: typeof AuthenticatedPostsRouteLazyImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/': {
      preLoaderRoute: typeof AuthenticatedIndexLazyImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/posts/$id': {
      preLoaderRoute: typeof AuthenticatedPostsIdRouteLazyImport
      parentRoute: typeof AuthenticatedPostsRouteLazyImport
    }
    '/_authenticated/posts/': {
      preLoaderRoute: typeof AuthenticatedPostsIndexImport
      parentRoute: typeof AuthenticatedPostsRouteLazyImport
    }
    '/_auth/login/': {
      preLoaderRoute: typeof AuthLoginIndexLazyImport
      parentRoute: typeof AuthImport
    }
    '/_auth/sign-up/': {
      preLoaderRoute: typeof AuthSignUpIndexLazyImport
      parentRoute: typeof AuthImport
    }
    '/_authenticated/posts/$id/edit': {
      preLoaderRoute: typeof AuthenticatedPostsIdEditRouteLazyImport
      parentRoute: typeof AuthenticatedPostsIdRouteLazyImport
    }
    '/_authenticated/posts/$id/': {
      preLoaderRoute: typeof AuthenticatedPostsIdIndexLazyImport
      parentRoute: typeof AuthenticatedPostsIdRouteLazyImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  AuthRoute.addChildren([AuthLoginIndexLazyRoute, AuthSignUpIndexLazyRoute]),
  AuthenticatedRoute.addChildren([
    AuthenticatedPostsRouteLazyRoute.addChildren([
      AuthenticatedPostsIdRouteLazyRoute.addChildren([
        AuthenticatedPostsIdEditRouteLazyRoute,
        AuthenticatedPostsIdIndexLazyRoute,
      ]),
      AuthenticatedPostsIndexRoute,
    ]),
    AuthenticatedIndexLazyRoute,
  ]),
])

/* prettier-ignore-end */
