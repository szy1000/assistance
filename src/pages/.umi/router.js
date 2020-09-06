import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import RendererWrapper0 from '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/.umi/LocaleWrapper.jsx';
import _dvaDynamic from 'dva/dynamic';

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/user',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__UserLayout" */ '../../layouts/UserLayout'),
          LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/UserLayout').default,
    routes: [
      {
        path: '/user',
        redirect: '/user/login',
        exact: true,
      },
      {
        path: '/user/login',
        name: 'login',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__User__models__register.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/User/models/register.js').then(
                  m => {
                    return { namespace: 'register', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__User__Login" */ '../User/Login'),
              LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                .default,
            })
          : require('../User/Login').default,
        exact: true,
      },
      {
        path: '/user/register',
        name: 'register',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__User__models__register.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/User/models/register.js').then(
                  m => {
                    return { namespace: 'register', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__User__Register" */ '../User/Register'),
              LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                .default,
            })
          : require('../User/Register').default,
        exact: true,
      },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__User__models__register.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/User/models/register.js').then(
                  m => {
                    return { namespace: 'register', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__User__RegisterResult" */ '../User/RegisterResult'),
              LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                .default,
            })
          : require('../User/RegisterResult').default,
        exact: true,
      },
      {
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__404" */ '../404'),
              LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                .default,
            })
          : require('../404').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('/Users/shenzhiyong/LHY/corporation/assistance/node_modules/_umi-build-dev@1.18.5@umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__BasicLayout" */ '../../layouts/BasicLayout'),
          LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/BasicLayout').default,
    Routes: [require('../Authorized').default],
    routes: [
      {
        path: '/',
        redirect: '/dashboard/analysis',
        authority: ['admin', 'user'],
        exact: true,
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Dashboard__models__activities.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Dashboard/models/activities.js').then(
                      m => {
                        return { namespace: 'activities', ...m.default };
                      },
                    ),
                    import(/* webpackChunkName: 'p__Dashboard__models__chart.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Dashboard/models/chart.js').then(
                      m => {
                        return { namespace: 'chart', ...m.default };
                      },
                    ),
                    import(/* webpackChunkName: 'p__Dashboard__models__monitor.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Dashboard/models/monitor.js').then(
                      m => {
                        return { namespace: 'monitor', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Dashboard__Analysis" */ '../Dashboard/Analysis'),
                  LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                    .default,
                })
              : require('../Dashboard/Analysis').default,
            exact: true,
          },
          {
            path: '/dashboard/monitor',
            name: 'monitor',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Dashboard__models__activities.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Dashboard/models/activities.js').then(
                      m => {
                        return { namespace: 'activities', ...m.default };
                      },
                    ),
                    import(/* webpackChunkName: 'p__Dashboard__models__chart.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Dashboard/models/chart.js').then(
                      m => {
                        return { namespace: 'chart', ...m.default };
                      },
                    ),
                    import(/* webpackChunkName: 'p__Dashboard__models__monitor.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Dashboard/models/monitor.js').then(
                      m => {
                        return { namespace: 'monitor', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Dashboard__Monitor" */ '../Dashboard/Monitor'),
                  LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                    .default,
                })
              : require('../Dashboard/Monitor').default,
            exact: true,
          },
          {
            path: '/dashboard/workplace',
            name: 'workplace',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Dashboard__models__activities.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Dashboard/models/activities.js').then(
                      m => {
                        return { namespace: 'activities', ...m.default };
                      },
                    ),
                    import(/* webpackChunkName: 'p__Dashboard__models__chart.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Dashboard/models/chart.js').then(
                      m => {
                        return { namespace: 'chart', ...m.default };
                      },
                    ),
                    import(/* webpackChunkName: 'p__Dashboard__models__monitor.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Dashboard/models/monitor.js').then(
                      m => {
                        return { namespace: 'monitor', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Dashboard__Workplace" */ '../Dashboard/Workplace'),
                  LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                    .default,
                })
              : require('../Dashboard/Workplace').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/shenzhiyong/LHY/corporation/assistance/node_modules/_umi-build-dev@1.18.5@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/form',
        icon: 'form',
        name: 'form',
        routes: [
          {
            path: '/form/basic-form',
            name: 'basicform',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Forms__models__form.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Forms/models/form.js').then(
                      m => {
                        return { namespace: 'form', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Forms__BasicForm" */ '../Forms/BasicForm'),
                  LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                    .default,
                })
              : require('../Forms/BasicForm').default,
            exact: true,
          },
          {
            path: '/form/step-form',
            name: 'stepform',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Forms__models__form.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Forms/models/form.js').then(
                      m => {
                        return { namespace: 'form', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Forms__StepForm" */ '../Forms/StepForm'),
                  LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                    .default,
                })
              : require('../Forms/StepForm').default,
            hideChildrenInMenu: true,
            routes: [
              {
                path: '/form/step-form',
                redirect: '/form/step-form/info',
                exact: true,
              },
              {
                path: '/form/step-form/info',
                name: 'info',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__Forms__models__form.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Forms/models/form.js').then(
                          m => {
                            return { namespace: 'form', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "p__Forms__StepForm" */ '../Forms/StepForm/Step1'),
                      LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Forms/StepForm/Step1').default,
                exact: true,
              },
              {
                path: '/form/step-form/confirm',
                name: 'confirm',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__Forms__models__form.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Forms/models/form.js').then(
                          m => {
                            return { namespace: 'form', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "p__Forms__StepForm" */ '../Forms/StepForm/Step2'),
                      LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Forms/StepForm/Step2').default,
                exact: true,
              },
              {
                path: '/form/step-form/result',
                name: 'result',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__Forms__models__form.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Forms/models/form.js').then(
                          m => {
                            return { namespace: 'form', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "p__Forms__StepForm" */ '../Forms/StepForm/Step3'),
                      LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Forms/StepForm/Step3').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/shenzhiyong/LHY/corporation/assistance/node_modules/_umi-build-dev@1.18.5@umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            path: '/form/advanced-form',
            name: 'advancedform',
            authority: ['admin'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Forms__models__form.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Forms/models/form.js').then(
                      m => {
                        return { namespace: 'form', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Forms__AdvancedForm" */ '../Forms/AdvancedForm'),
                  LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                    .default,
                })
              : require('../Forms/AdvancedForm').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/shenzhiyong/LHY/corporation/assistance/node_modules/_umi-build-dev@1.18.5@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/list',
        icon: 'table',
        name: 'list',
        routes: [
          {
            path: '/list/table-list',
            name: 'searchtable',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__List__models__rule.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/List/models/rule.js').then(
                      m => {
                        return { namespace: 'rule', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__List__TableList" */ '../List/TableList'),
                  LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                    .default,
                })
              : require('../List/TableList').default,
            exact: true,
          },
          {
            path: '/list/basic-list',
            name: 'basiclist',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__List__models__rule.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/List/models/rule.js').then(
                      m => {
                        return { namespace: 'rule', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__List__BasicList" */ '../List/BasicList'),
                  LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                    .default,
                })
              : require('../List/BasicList').default,
            exact: true,
          },
          {
            path: '/list/card-list',
            name: 'cardlist',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__List__models__rule.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/List/models/rule.js').then(
                      m => {
                        return { namespace: 'rule', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__List__CardList" */ '../List/CardList'),
                  LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                    .default,
                })
              : require('../List/CardList').default,
            exact: true,
          },
          {
            path: '/list/search',
            name: 'searchlist',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__List__models__rule.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/List/models/rule.js').then(
                      m => {
                        return { namespace: 'rule', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__List__List" */ '../List/List'),
                  LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                    .default,
                })
              : require('../List/List').default,
            routes: [
              {
                path: '/list/search',
                redirect: '/list/search/articles',
                exact: true,
              },
              {
                path: '/list/search/articles',
                name: 'articles',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__List__models__rule.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/List/models/rule.js').then(
                          m => {
                            return { namespace: 'rule', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "p__List__List" */ '../List/Articles'),
                      LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../List/Articles').default,
                exact: true,
              },
              {
                path: '/list/search/projects',
                name: 'projects',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__List__models__rule.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/List/models/rule.js').then(
                          m => {
                            return { namespace: 'rule', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "p__List__List" */ '../List/Projects'),
                      LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../List/Projects').default,
                exact: true,
              },
              {
                path: '/list/search/applications',
                name: 'applications',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__List__models__rule.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/List/models/rule.js').then(
                          m => {
                            return { namespace: 'rule', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "p__List__List" */ '../List/Applications'),
                      LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../List/Applications').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/shenzhiyong/LHY/corporation/assistance/node_modules/_umi-build-dev@1.18.5@umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            component: () =>
              React.createElement(
                require('/Users/shenzhiyong/LHY/corporation/assistance/node_modules/_umi-build-dev@1.18.5@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/profile',
        name: 'profile',
        icon: 'profile',
        routes: [
          {
            path: '/profile/basic',
            name: 'basic',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Profile__models__profile.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Profile/models/profile.js').then(
                      m => {
                        return { namespace: 'profile', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Profile__BasicProfile" */ '../Profile/BasicProfile'),
                  LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                    .default,
                })
              : require('../Profile/BasicProfile').default,
            exact: true,
          },
          {
            path: '/profile/basic/:id',
            hideInMenu: true,
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Profile__models__profile.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Profile/models/profile.js').then(
                      m => {
                        return { namespace: 'profile', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Profile__BasicProfile" */ '../Profile/BasicProfile'),
                  LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                    .default,
                })
              : require('../Profile/BasicProfile').default,
            exact: true,
          },
          {
            path: '/profile/advanced',
            name: 'advanced',
            authority: ['admin'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Profile__models__profile.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Profile/models/profile.js').then(
                      m => {
                        return { namespace: 'profile', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Profile__AdvancedProfile" */ '../Profile/AdvancedProfile'),
                  LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                    .default,
                })
              : require('../Profile/AdvancedProfile').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/shenzhiyong/LHY/corporation/assistance/node_modules/_umi-build-dev@1.18.5@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        name: 'result',
        icon: 'check-circle-o',
        path: '/result',
        routes: [
          {
            path: '/result/success',
            name: 'success',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__Result__Success" */ '../Result/Success'),
                  LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                    .default,
                })
              : require('../Result/Success').default,
            exact: true,
          },
          {
            path: '/result/fail',
            name: 'fail',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__Result__Error" */ '../Result/Error'),
                  LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                    .default,
                })
              : require('../Result/Error').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/shenzhiyong/LHY/corporation/assistance/node_modules/_umi-build-dev@1.18.5@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        routes: [
          {
            path: '/exception/403',
            name: 'not-permission',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Exception__models__error.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Exception/models/error.js').then(
                      m => {
                        return { namespace: 'error', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Exception__403" */ '../Exception/403'),
                  LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                    .default,
                })
              : require('../Exception/403').default,
            exact: true,
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Exception__models__error.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Exception/models/error.js').then(
                      m => {
                        return { namespace: 'error', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Exception__404" */ '../Exception/404'),
                  LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                    .default,
                })
              : require('../Exception/404').default,
            exact: true,
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Exception__models__error.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Exception/models/error.js').then(
                      m => {
                        return { namespace: 'error', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Exception__500" */ '../Exception/500'),
                  LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                    .default,
                })
              : require('../Exception/500').default,
            exact: true,
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Exception__models__error.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Exception/models/error.js').then(
                      m => {
                        return { namespace: 'error', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Exception__TriggerException" */ '../Exception/TriggerException'),
                  LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                    .default,
                })
              : require('../Exception/TriggerException').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/shenzhiyong/LHY/corporation/assistance/node_modules/_umi-build-dev@1.18.5@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        name: 'account',
        icon: 'user',
        path: '/account',
        routes: [
          {
            path: '/account/center',
            name: 'center',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__Account__Center__Center" */ '../Account/Center/Center'),
                  LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                    .default,
                })
              : require('../Account/Center/Center').default,
            routes: [
              {
                path: '/account/center',
                redirect: '/account/center/articles',
                exact: true,
              },
              {
                path: '/account/center/articles',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "p__Account__Center__Center" */ '../Account/Center/Articles'),
                      LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Account/Center/Articles').default,
                exact: true,
              },
              {
                path: '/account/center/applications',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "p__Account__Center__Center" */ '../Account/Center/Applications'),
                      LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Account/Center/Applications').default,
                exact: true,
              },
              {
                path: '/account/center/projects',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "p__Account__Center__Center" */ '../Account/Center/Projects'),
                      LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Account/Center/Projects').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/shenzhiyong/LHY/corporation/assistance/node_modules/_umi-build-dev@1.18.5@umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Account__Settings__models__geographic.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Account/Settings/models/geographic.js').then(
                      m => {
                        return { namespace: 'geographic', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Account__Settings__Info" */ '../Account/Settings/Info'),
                  LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                    .default,
                })
              : require('../Account/Settings/Info').default,
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
                exact: true,
              },
              {
                path: '/account/settings/base',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__Account__Settings__models__geographic.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Account/Settings/models/geographic.js').then(
                          m => {
                            return { namespace: 'geographic', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "p__Account__Settings__Info" */ '../Account/Settings/BaseView'),
                      LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Account/Settings/BaseView').default,
                exact: true,
              },
              {
                path: '/account/settings/security',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__Account__Settings__models__geographic.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Account/Settings/models/geographic.js').then(
                          m => {
                            return { namespace: 'geographic', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "p__Account__Settings__Info" */ '../Account/Settings/SecurityView'),
                      LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Account/Settings/SecurityView').default,
                exact: true,
              },
              {
                path: '/account/settings/binding',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__Account__Settings__models__geographic.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Account/Settings/models/geographic.js').then(
                          m => {
                            return { namespace: 'geographic', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "p__Account__Settings__Info" */ '../Account/Settings/BindingView'),
                      LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Account/Settings/BindingView').default,
                exact: true,
              },
              {
                path: '/account/settings/notification',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__Account__Settings__models__geographic.js' */ '/Users/shenzhiyong/LHY/corporation/assistance/src/pages/Account/Settings/models/geographic.js').then(
                          m => {
                            return { namespace: 'geographic', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "p__Account__Settings__Info" */ '../Account/Settings/NotificationView'),
                      LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Account/Settings/NotificationView').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/shenzhiyong/LHY/corporation/assistance/node_modules/_umi-build-dev@1.18.5@umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            component: () =>
              React.createElement(
                require('/Users/shenzhiyong/LHY/corporation/assistance/node_modules/_umi-build-dev@1.18.5@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        name: 'editor',
        icon: 'highlight',
        path: '/editor',
        routes: [
          {
            path: '/editor/flow',
            name: 'flow',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__Editor__GGEditor__Flow" */ '../Editor/GGEditor/Flow'),
                  LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                    .default,
                })
              : require('../Editor/GGEditor/Flow').default,
            exact: true,
          },
          {
            path: '/editor/mind',
            name: 'mind',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__Editor__GGEditor__Mind" */ '../Editor/GGEditor/Mind'),
                  LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                    .default,
                })
              : require('../Editor/GGEditor/Mind').default,
            exact: true,
          },
          {
            path: '/editor/koni',
            name: 'koni',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__Editor__GGEditor__Koni" */ '../Editor/GGEditor/Koni'),
                  LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                    .default,
                })
              : require('../Editor/GGEditor/Koni').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/shenzhiyong/LHY/corporation/assistance/node_modules/_umi-build-dev@1.18.5@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__404" */ '../404'),
              LoadingComponent: require('/Users/shenzhiyong/LHY/corporation/assistance/src/components/PageLoading/index')
                .default,
            })
          : require('../404').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('/Users/shenzhiyong/LHY/corporation/assistance/node_modules/_umi-build-dev@1.18.5@umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('/Users/shenzhiyong/LHY/corporation/assistance/node_modules/_umi-build-dev@1.18.5@umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
