/*
 * @Author: luoxi
 * @LastEditTime: 2022-06-24 23:10:17
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
            console.log('res data', this.data);
            this.isLoading = false
        }
    }

}
