/*
 * @Author: luoxi
 * @LastEditTime: 2022-01-17 22:33:41
 * @LastEditors: your name
 * @Description: 路由配置 route
 */
import Home from '@/views/Home'
import About from '@/views/About'
import Blog from '@/views/Blog'
import Message from '@/views/Message'
import Project from '@/views/Project'

export default [
    // 路由规则
    { name: 'Home', path: '/', component: Home },
    { name: 'About', path: '/about', component: About },
    { name: 'Blog', path: '/blog', component: Blog },
    { name: 'Message', path: '/message', component: Message },
    { name: 'Project', path: '/project', component: Project },
]