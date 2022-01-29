/*
 * @Author: luoxi
 * @LastEditTime: 2022-01-29 11:37:59
 * @LastEditors: your name
 * @Description: 远程获取数据的代码
 */

export default function (defaultDataValues = null) {
    return {
        data() {
            return {
                isLoading: true,
                data: defaultDataValues
            }
        },
        // 具体的组件中，需要提供一个远程获取数据的方法 fetchData
        async created() {
            this.data = await this.fetchData()
            this.isLoading = false
        }
    }

}
