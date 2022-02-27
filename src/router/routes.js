/*
 * @Author: luoxi
 * @LastEditTime: 2022-02-27 22:29:18
 * @LastEditors: your name
 * @Description: 路由配置 route
 */
export default [
    // 路由规则
    { name: 'Home', path: '/', component: () => import(/* webpackChunkName:"home" */"@/views/Home"), meta: { title: "首页" } },
    { name: 'About', path: '/about', component: () => import(/* webpackChunkName:"about" */"@/views/About"), meta: { title: "关于我" } },
    { name: 'Blog', path: '/blog', component: () => import(/* webpackChunkName:"blog" */"@/views/Blog"), meta: { title: "博客" } },
    { name: 'CategoryBlog', path: '/blog/cate/:categoryId', component: () => import(/* webpackChunkName:"blog" */"@/views/Blog"), meta: { title: "文章" } },
    { name: 'BlogDetail', path: '/blog/:id', component: () => import(/* webpackChunkName:"blogDetail" */"@/views/Blog/Detail"), meta: { title: "文章详情" } },
    { name: 'Message', path: '/message', component: () => import(/* webpackChunkName:"message" */"@/views/Message"), meta: { title: "留言板" } },
    { name: 'Project', path: '/project', component: () => import(/* webpackChunkName:"project" */"@/views/Project"), meta: { title: "项目&效果" } },
]