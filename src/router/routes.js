/*
 * @Author: luoxi
 * @LastEditTime: 2022-02-06 23:21:19
 * @LastEditors: your name
 * @Description: 路由配置 route
 */
import Home from '@/views/Home'
import About from '@/views/About'
import Blog from '@/views/Blog'
import Message from '@/views/Message'
import Project from '@/views/Project'
import BlogDetail from '@/views/Blog/Detail'

export default [
    // 路由规则
    { name: 'Home', path: '/', component: Home },
    { name: 'About', path: '/about', component: About },
    { name: 'Blog', path: '/blog', component: Blog },
    { name: 'CategoryBlog', path: '/blog/cate/:categoryId', component: Blog },   
    { name: 'BlogDetail', path: '/blog/:id', component: BlogDetail },   
    { name: 'Message', path: '/message', component: Message },
    { name: 'Project', path: '/project', component: Project },
]