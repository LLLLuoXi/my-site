/*
 * @Author: luoxi
 * @LastEditTime: 2022-02-28 22:18:18
 * @LastEditors: your name
 * @Description: 路由配置 route
 */
import "nprogress/nprogress.css"
import { start, done, configure } from "nprogress"

configure({
    trickleSpeed: 20,
    showSpinner: false,
})
function delay(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, duration)
    })

}
function getPageComponent(PageCompResolve) {
    return async () => {
        start()
        if (process.env.NODE_ENV === 'development') {
            await delay(1500)
        }
        const comp = await PageCompResolve()
        done()
        return comp
    }
}
export default [
    // 路由规则
    {
        name: 'Home', path: '/', component: getPageComponent(() => import(/* webpackChunkName:"home" */"@/views/Home")),
        meta: { title: "首页" }
    },
    {
        name: 'About', path: '/about', component: getPageComponent(() => import(/* webpackChunkName:"about" */"@/views/About")),
        meta: { title: "关于我" }
    },
    {
        name: 'Blog', path: '/blog', component: getPageComponent(() => import(/* webpackChunkName:"blog" */"@/views/Blog")),
        meta: { title: "博客" }
    },
    {
        name: 'CategoryBlog', path: '/blog/cate/:categoryId', component: getPageComponent(() => import(/* webpackChunkName:"blog" */"@/views/Blog")),
        meta: { title: "文章" }
    },
    {
        name: 'BlogDetail', path: '/blog/:id', component: getPageComponent(() => import(/* webpackChunkName:"blogDetail" */"@/views/Blog/Detail")),
        meta: { title: "文章详情" }
    },
    {
        name: 'Message', path: '/message', component: getPageComponent(() => import(/* webpackChunkName:"message" */"@/views/Message")),
        meta: { title: "留言板" }
    },
    {
        name: 'Project', path: '/project', component: getPageComponent(() => import(/* webpackChunkName:"project" */"@/views/Project")),
        meta: { title: "项目&效果" }
    },
]