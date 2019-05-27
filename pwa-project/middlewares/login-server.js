// login-server.js
export default async function ({ store, redirect, req }) {

    // 如果是服务端，store 中都是初始化的状态
    // 需要先去通过接口向服务器去验证用户是否登录，并设置 store 中的登录状态，再进行检测
    await store.dispatch('common/validLogin');

    let isLogin = store.state.common.login || false;

    // 如果未登录且当前路由不是到登录页，则重定向到登录页
    // 通过 req.path 判断路由
    if (!isLogin && req.path !== '/login') {
        return redirect({
            path: '/login'
        });
    }
}