/*
 * @Author: luoxi
 * @LastEditTime: 2022-02-22 22:02:41
 * @LastEditors: your name
 * @Description: 控制网站标题
 */
let routerTitle, siteTitle
function setTitle() {
    if (!routerTitle && !siteTitle) {
        document.title = 'Loading...'
    } else if (routerTitle && !siteTitle) {
        document.title = routerTitle

    } else if (!routerTitle && siteTitle) {
        document.title = siteTitle
    }else{
        document.title = `${routerTitle}-${siteTitle}`
    }

}
export default {
    //  设置路由标题
    setRouteTitle(title) {
        console.log('title',title)
        routerTitle = title
        setTitle()
    },

    //  设置网站标题
    setSiteTitle(title) {
        siteTitle = title
        setTitle()
    }
}